import { ScrollView, Text, View } from "react-native";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import {icons} from "@/constants";
import {useState} from "react";
import OAuth from "@/components/OAuth";
import {Link} from "expo-router";
import * as Yup from "yup";
import {useFormik} from "formik";
import {FirebaseError} from "@firebase/app";
import {useAuth} from "@/contexts/AuthContext";

interface SignUpFormValues {
    email: string;
    password: string;
    confirmPassword: string;
}

const SignUpSchema = Yup.object().shape({
    email: Yup.string()
        .email("Please enter a valid email")
        .required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), undefined], "Passwords must match")
        .required("Confirm your password"),
});
const SignUp = () => {
    const {signUpWithEmail} = useAuth()
    const [ error, setError ] = useState<string | null >(null)
    const [form, setForm]= useState({
        email: '',
        password: '',
        confirmPassword: '',
    })
    const formik = useFormik<SignUpFormValues>({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: SignUpSchema,
        onSubmit: async (values) => {
            try {
                await signUpWithEmail(values.email, values.password)
            }catch (e){
                if (e instanceof FirebaseError) {
                    setError(e.message);
                }else {
                    setError("An unexpected error occurred.");
                }
            }
        },
    });
    return (
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 bg-white">
                <View className="relative w-full h-[180px] bg-white">
                    <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
                        Create Your Account
                    </Text>
                </View>
                <View className="p-5">
                    <InputField
                        label="Email"
                        placeholder="Enter Email"
                        icon={icons.person}
                        value={formik.values.email}
                        onChangeText={formik.handleChange("email")}
                        onBlur={formik.handleBlur("email")}
                        error={formik.touched.email && formik.errors.email ? formik.errors.email : null}
                    />
                    <InputField
                        label="Password"
                        placeholder="Enter password"
                        icon={icons.email}
                        textContentType="password"
                        secureTextEntry={true}
                        value={formik.values.password}
                        onChangeText={formik.handleChange("password")}
                        onBlur={formik.handleBlur("password")}
                        error={formik.touched.password && formik.errors.password ? formik.errors.password : null}
                    />
                    <InputField
                        label="Confirm Password"
                        placeholder="Confirm password"
                        icon={icons.lock}
                        secureTextEntry={true}
                        value={formik.values.confirmPassword}
                        onChangeText={formik.handleChange("confirmPassword")}
                        onBlur={formik.handleBlur("confirmPassword")}
                        error={formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : null}
                    />
                    {error&&
                        <Text className="text-lg text-center text-red-500 ">
                            An unexpected error occurred. Try again later.
                        </Text>
                    }
                    <CustomButton
                        title="Sign Up"
                        className="mt-6 bg-primary-500"
                        onPress={formik.handleSubmit as () => void}
                    />
                    <OAuth />
                    <Link
                        href="/sign-in"
                        className="text-lg text-center text-general-200 mt-10"
                    >
                        Already have an account?{" "}
                        <Text className="text-primary-500">Log In</Text>
                    </Link>
                </View>
            </View>
        </ScrollView>
    );
};

export default SignUp;