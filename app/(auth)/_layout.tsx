import {router, Stack} from "expo-router";
import {useEffect} from "react";
import {useAuth} from "@/contexts/AuthContext";

const Layout = () => {
    const { currentUser, loading } = useAuth();
    useEffect(() => {
        if (loading) return;

        if (currentUser) {
            router.replace("/(root)/home");
        }
    }, [currentUser, loading]);
    return (
        <Stack>
            <Stack.Screen name="welcome" options={{ headerShown: false }} />
            <Stack.Screen name="sign-up" options={{ headerShown: false }} />
            <Stack.Screen name="sign-in" options={{ headerShown: false }} />
            <Stack.Screen name="forgot-password" options = {{headerShown:false}}/>
            <Stack.Screen name="notification" options = {{headerShown:false}}/>
        </Stack>
    );
};

export default Layout;