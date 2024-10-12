import {router, Stack} from 'expo-router';
import 'react-native-reanimated';
import {useAuth} from "@/contexts/AuthContext";
import {useEffect} from "react";

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="home" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
        </Stack>
    );
}

export default Layout;