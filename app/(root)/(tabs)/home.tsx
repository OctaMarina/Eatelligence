import React, {useEffect} from "react";
import { View, Text, Button } from "react-native";
import { useAuth } from "@/contexts/AuthContext";
import {SafeAreaView} from "react-native-safe-area-context";
import {router} from "expo-router";

const Home = () => {
    const { logOut } = useAuth();

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log("User logged out");
                router.replace("/(auth)/sign-in")
            })
            .catch((error: any) => {
                console.error("Error logging out: ", error);
            });
    };

    return (
        <SafeAreaView>
            <Text>home</Text>
            <Button title="Logout" onPress={handleLogout} />
        </SafeAreaView>
    );
};

export default Home;