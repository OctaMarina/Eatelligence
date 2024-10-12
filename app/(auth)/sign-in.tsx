import {Link} from "expo-router";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons } from "@/constants";

import {useAuth} from "@/contexts/AuthContext";
import {FirebaseError} from "@firebase/app";

const SignIn = () => {
    const { signInWithEmail } = useAuth()
    const [ error, setError ] = useState<string | null >(null)
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const onSignInPressed = async () =>{
        try {
            await signInWithEmail(form.email, form.password)
        }catch (e){
            if (e instanceof FirebaseError) {
                setError(e.message);
            }else {
                setError("An unexpected error occurred.");
            }
        }
    }


    return (
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 bg-white">
                <View className="relative w-full h-[250px]">
                    <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
                        Welcome 👋
                    </Text>
                </View>

                <View className="p-5">
                    <InputField
                        label="Email"
                        placeholder="Enter email"
                        icon={icons.email}
                        textContentType="emailAddress"
                        value={form.email}
                        onChangeText={(value) => setForm({ ...form, email: value })}
                    />

                    <InputField
                        label="Password"
                        placeholder="Enter password"
                        icon={icons.lock}
                        secureTextEntry={true}
                        textContentType="password"
                        value={form.password}
                        onChangeText={(value) => setForm({ ...form, password: value })}
                    />
                    {error&&
                        <Text className="text-lg text-center text-red-500 ">
                            Incorrect username or password. Please try again.
                        </Text>
                    }
                    <CustomButton
                        title="Sign In"
                        onPress={onSignInPressed}
                        className="mt-6"
                    />

                    <OAuth />
                    <Link
                        href="/sign-up"
                        className="text-lg text-center text-general-200 mt-10"
                    >
                        Don't have an account?{" "}
                        <Text className="text-primary-500">Sign Up</Text>
                    </Link>
                </View>
            </View>
        </ScrollView>
    );
};

export default SignIn;