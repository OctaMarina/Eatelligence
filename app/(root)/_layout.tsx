import {router, Stack} from "expo-router";
import {useAuth} from "@/contexts/AuthContext";
import {useEffect} from "react";

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    );
};

export default Layout;