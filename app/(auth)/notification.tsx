import {ScrollView, Text, View} from "react-native";;
import CustomButton from "@/components/CustomButton";
import {Link, router} from "expo-router";

const Notification = () =>(
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 bg-white">
                <View className="relative w-full h-[250px]">
                    <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
                        Verify Your Email
                    </Text>
                </View>

                <View className="p-5">
                    <Text className="text-lg text-black mb-5">
                        An email has been sent to you. Click on it to reset your password.
                    </Text>

                    <CustomButton
                        title="Back To Log In"
                        onPress={()=>router.replace('/(auth)/sign-in')}
                        className="mt-6"
                    />

                </View>
            </View>
        </ScrollView>
);


export default Notification;