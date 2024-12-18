"use client"

import { Button } from "@/components/ui/button";
import {signOut} from "@/lib/auth";

function SignOutButton() {
  return <Button onClick={ async  () =>  await signOut()}>Sign Out</Button>;
}

export default SignOutButton;
