# ───────────── fișier server_corect.py ─────────────
import io, numpy as np
from pathlib import Path
from PIL import Image
from flask import Flask, request, jsonify
from tensorflow import keras
import tensorflow as tf

MODEL_PATH = Path("model_cal_savedmodel.keras")  # un singur nume
IMG_SIZE = (180, 180)
MACROS = ["calories", "mass_g", "fat_g", "carbs_g", "protein_g"]

app = Flask(__name__)


# metrici custom (dacă nu le înregistrezi cu @register_keras_serializable)
def weighted_mse(y_true, y_pred): ...


def rmse_calories(y_true, y_pred): ...


def mae_calories(y_true, y_pred): ...


custom = {
    "weighted_mse": weighted_mse,
    "rmse_calories": rmse_calories,
    "mae_calories": mae_calories,
}

# load model
model = keras.models.load_model(MODEL_PATH, custom_objects=custom, compile=False)


def preprocess_image(file_storage):
    img = Image.open(io.BytesIO(file_storage.read())).convert("RGB").resize(IMG_SIZE)
    arr = np.array(img, dtype=np.float32)  # NU împărțim la 255
    return np.expand_dims(arr, 0)


@app.route("/predict", methods=["POST"])
def predict():
    file = request.files.get("image")
    if file is None:
        return jsonify(error="Lipsește câmpul «image»"), 400
    try:
        x = preprocess_image(file)
        preds = model.predict(x, verbose=0)[0]
        output = {k: float(v) for k, v in zip(MACROS, preds)}
        return jsonify(output)
    except Exception as err:
        return jsonify(error=str(err)), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
