# Eatelligence

**Eatelligence** is an AI-powered proof-of-concept that estimates the nutritional values of a meal from a single image using deep learning.

At its core lies a convolutional neural network trained on real-world food images and macronutrient labels from the [Nutrition5k dataset](https://github.com/apple/ml-nutrition5k). The mobile and server components exist solely to **demonstrate the capabilities of the AI model in an end-to-end setting**.

---

## 🧠 AI Model – Core of the Project

The AI model was developed and evaluated in the notebook:

📍 [`notebooks/nutrition5k_model_dev_and_eda.ipynb`](notebooks/nutrition5k_model_dev_and_eda.ipynb)

This notebook includes:

- Preprocessing & visualization of the Nutrition5k dataset
- Comparative study of 8+ model architectures (CNNs, EfficientNet)
- Custom calorie-prioritized loss function for improved kcal prediction
- Post-hoc linear correction for calories (Ridge regression)
- Full evaluation (MAE, RMSE, R²) across macronutrients and total calories
- Final model export for deployment (.h5 / SavedModel format)

> 🧮 The final model achieves **MAE of ~36.9 kcal**, reduced to **28.4 kcal** after post-hoc calibration.

---

## 📱 React Native App (Frontend)

A simple React Native app allows users to:

- Take or upload a photo of a meal
- Send the image to the backend over HTTP
- Receive estimated nutritional values in real time

This interface demonstrates how the AI model can be integrated into a mobile experience.

---

## 🌐 Flask Server (Backend)

A lightweight Flask server handles:

- Loading the trained deep learning model
- Accepting image uploads via POST requests
- Running inference and returning structured JSON responses

Dependencies include: `Flask`, `TensorFlow`, `NumPy`, and `Pillow`.

---

## ▶️ Run the Mobile App

To run the React Native frontend locally:

```bash
npm install
npx react-native run-android  # or run-ios
```

Make sure the Flask server is running and accessible from your device (e.g., http://localhost:5000 for emulators or your IP address for real devices).

## 📚 Dataset

This project uses [Nutrition5k](https://github.com/apple/ml-nutrition5k), a research dataset of plated meals and detailed nutritional annotations released by Apple.  
It includes over 5,000 meal samples with images and corresponding macronutrient information (calories, protein, fat, and carbohydrates).  
The dataset is ideal for training machine learning models focused on nutritional analysis from visual input.

---

## 📄 License

This project is intended for **research and educational purposes only**.  
Please refer to the original [Nutrition5k license](https://github.com/apple/ml-nutrition5k/blob/main/LICENSE) for dataset usage terms.

---

## 📫 Contact

For questions, ideas, or contributions, feel free to reach out via [my contact page](https://octavianmarina.com/#contact).
