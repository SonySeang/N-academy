"use client"
import {signIn} from "next-auth/react"
import {Button} from "@/components/ui/button";


export function SignIn() {
    function handleSignIn() {
        signIn("github", {redirectTo: "/dashboard"});
    }
    return <Button variant="secondary" onClick={handleSignIn}>Sign In</Button>
}