import { SubmitHandler, useForm } from "react-hook-form";
import { LoginView } from "./login.view";
import { LoginFormFielsType } from "@/types/forms";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase-config";
import { useToggle } from "@/hooks/use-toggle";
import { firebaseSigninUser } from "@/api/authentication";
import { toast } from "react-toastify";
import { useRouter } from "next/router";


export const LoginContainer = () => {
    const router = useRouter();
    const {value: isLoading, setValue: setIsLoading, toggle} = useToggle();


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                console.log('user', user);
                // ...
            } else {
                console.log("tu n'es pas connecté")
                // ...
            }
        });
    }, []);

    const {
       handleSubmit,
       formState: { errors },
       register,
       setError,
       reset,
   } = useForm<LoginFormFielsType>();

   const handleSignInUser = async({
    email, 
    password
}: LoginFormFielsType) => {
    const {error} = await firebaseSigninUser(email, password);
    if(error) {
        setIsLoading(false);
        toast.error(error.message);
        return;
    }
    toast.success("Bienvenue sur Coder Monkeys")
    setIsLoading(false);
    reset();
    router.push("/mon-espace");


   }

   const onSubmit: SubmitHandler<LoginFormFielsType> = async (formData) => {
       setIsLoading(true)
       const { password } = formData;
       if(password.length <= 5) {
        setError("password", {
            type:"manuel", 
            message: "ton mot de passe doit comporter au minimum 6 caractères",
        });
       setIsLoading(false)
       return;
    }
    handleSignInUser(formData);
   };
    return (
        <LoginView
            form={{
                errors,
                register,
                handleSubmit,
                onSubmit,
                isLoading,
            }}
         />
    );
}