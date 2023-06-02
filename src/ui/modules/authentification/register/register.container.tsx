import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterView } from "./register.view";
import { RegisterFormFielsType } from "@/types/forms";
import { firebaseCreateUser, sendEmailVerificationProcedure } from "@/api/authentication";
import { toast } from "react-toastify";
import { useToggle } from "@/hooks/use-toggle";
import { Button } from "@/ui/design-system/button/button";
import { firestoreCreateDocument, firestoreUpdateDocument } from "@/api/firestore";


export const RegisterContainer = () => {

    const {value: isLoading, setValue: setIsLoading} = useToggle();

    const {
        handleSubmit,
        formState: { errors },
        register,
        setError,
        reset,
    } = useForm<RegisterFormFielsType>();

    const handleCreateUserDocument = async (
        collectionName: string, 
        documentID: string, 
        document: object
    ) => {
        const { error, data } = await firestoreCreateDocument(
            collectionName, 
            documentID, 
            document
        );
        if(error) {
            setIsLoading(false);
            toast.error(error.message);
            return;
        }
        toast.success("Bienvenue sur l'app des singes codeurs")
        setIsLoading(false);
        reset();
        // .. @todo send email confirmation procedure
        sendEmailVerificationProcedure();
    }

    const handleCreateUserAuthentication = async ({
        email,
        password, 
        how_did_hear,
    }: RegisterFormFielsType) => {
        const { error, data } = await firebaseCreateUser(email, password)
        if(error) {
            setIsLoading(false);
            toast.error(error.message);
            return;
        }
    
        //* @todo create user document
        const userDocumentData = {
            email: email,
            how_did_hear: how_did_hear,
            uid: data.uid,
            creation_date: new Date(),
        }
        handleCreateUserDocument("users", data.uid, userDocumentData);

    };

    const onSubmit: SubmitHandler<RegisterFormFielsType> = async (formData) => {
        setIsLoading(true)
        const { password } = formData;

        if(password.length <= 5) {
            setError("password", {
                type:"manuel",
                message: "ton mot de passe doit comporter au minimum 6 caractères",
            });
            return;
        }

        handleCreateUserAuthentication(formData)

    };



    return (


        
        <RegisterView
            form={{
                errors,
                register,
                handleSubmit,
                onSubmit,
                isLoading,
            }}
        />

    );
};
