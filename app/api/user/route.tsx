import {NextRequest, NextResponse} from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
    const user = await prisma.user.findMany({
        select : {
            name : true ,
            email : true
        }
    })
    return NextResponse.json(user)
}

