import { ReactNode, useEffect, useState } from "react";
import { createContext, useContext } from 'react';
import { auth } from "@/firebaseConfig";
import {createUserWithEmailAndPassword, User, UserCredential, onAuthStateChanged, signOut} from "@firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";


interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContextType {
    currentUser: User | null;
    signInWithEmail: (email: string, password: string) => Promise<User>;
    signUpWithEmail: (email: string, password: string) => Promise<User>;
    logOut: () => Promise<void>;
    loading: boolean;
    error: string;
}


const AuthContext = createContext<any>(null);
export const useAuth = () => {
    return useContext(AuthContext);
}
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const signUpWithEmail = async (email: string, password: string) => {
        try {
            const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
            return userCredential.user;
        } catch (error: any) {
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const signInWithEmail = async (email: string, password: string) => {
        try {
            const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
            return userCredential.user;
        } catch (error: any) {
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const logOut = async () => {
        try {
            await signOut(auth);
        } catch (error: any) {
            throw error;
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        console.log("loading",loading)
    }, [loading]);

    const value = {
        currentUser,
        signInWithEmail,
        signUpWithEmail,
        logOut,
        loading,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;