import React from "react";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

interface PostFormBtnProps {
  actionType: "create" | "update" | "delete" | "cancel";
}

function PostFormBtn({ actionType }: PostFormBtnProps) {
  const { pending } = useFormStatus();
  return <Button type="submit" disabled={pending} className="self-end">
    {actionType === "create" ? "Create" : "Update"}
  </Button>;
}

export default PostFormBtn;
