import React from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { logIn, signUp } from "@/app/actions/actions";

interface AuthFormProps {
  actionType: "login" | "signup";
}

export default function AuthForm({ actionType }: AuthFormProps) {
  return (
    <form action={actionType === "login" ? logIn : signUp}>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" name="password" />
      </div>
      <Button className="mt-2 my-2 rounded-xl" type="submit">
        {actionType === "login" ? "Sign in" : "Sign up"}
      </Button>
    </form>
  );
}
