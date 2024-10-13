import React from 'react';
import { Image, Text, View } from "react-native";
import CustomButton from "@/components/CustomButton";
import { icons } from "@/constants";
import {useAuth} from "@/contexts/AuthContext";

const OAuth = () => {
    const { signInWithGoogle, currentUser } = useAuth();

    return (
        <View>
            <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
                <View className="flex-1 h-[1px] bg-general-100" />
                <Text className="text-lg">Or</Text>
                <View className="flex-1 h-[1px] bg-general-100" />
            </View>

            <View className="flex flex-row space-x-10">
                <CustomButton
                    className="mt-5 w-full shadow-none flex-1"
                    title=""
                    IconLeft={() => (
                        <Image
                            source={icons.google}
                            resizeMode="contain"
                            className="w-5 h-5 mx-2"
                        />
                    )}
                    bgVariant="outline"
                    textVariant="primary"
                    onPress={signInWithGoogle}
                />
            </View>


        </View>
    );
};

export default OAuth;