import {Link, router} from "expo-router";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons } from "@/constants";

import { useAuth } from "@/contexts/AuthContext";
import { FirebaseError } from "@firebase/app";

const ForgotPassword = () => {
    const { resetPassword } = useAuth()
    const [email, setEmail] = useState("");
    const [error, setError] = useState<string | null>(null);

    const onSendCodePressed = async () => {
        try{
            await resetPassword(email);
            router.replace('/notification')
        }catch(e){
            if(e instanceof FirebaseError)
                setError(e.message)
            else
                setError("An unexpected error occurred.")
        }
    };

    return (
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 bg-white">
                <View className="relative w-full h-[250px]">
                    <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
                        Forgot password?
                    </Text>
                </View>

                <View className="p-5">
                    <Text className="text-lg text-black mb-5">
                        Don't worry! It happens. Please enter the email associated with your account.
                    </Text>

                    <InputField
                        label="Email"
                        placeholder="Enter email"
                        icon={icons.email}
                        textContentType="emailAddress"
                        value={email}
                        onChangeText={(value) => setEmail(value)}
                    />
                    {error&&
                        <Text className="text-lg text-center text-red-500 ">
                            Something went wrong. Please try again later.
                        </Text>
                    }
                    <CustomButton
                        title="Send Code"
                        onPress={onSendCodePressed}
                        className="mt-6"
                    />

                    <Link
                        href="/sign-in"
                        className="text-lg text-center text-general-200 mt-10"
                    >
                        Back to <Text className="text-primary-500">Log In</Text>
                    </Link>
                </View>
            </View>
        </ScrollView>
    );
};

export default ForgotPassword;