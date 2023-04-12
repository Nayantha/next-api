"use client"
import {FC, useState} from 'react'
import Button from "@/ui/Button";
import {signOut} from "next-auth/react";

interface SignOutButtonProps {
}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
    const [isLoading, setLoading] = useState<boolean>(false)

    const signOutWithGoogle = async () => {
        setLoading(true)
        try {
            await signOut()
        } catch (error) {
            console.log(error)
            // toast({
            //     type: "error",
            //     title: "Error Signing out",
            //     message: "Please try again later."
            // })
        }
    }

    return <Button onClick={signOutWithGoogle} isLoading={isLoading}>Sign out</Button>
}
export default SignOutButton