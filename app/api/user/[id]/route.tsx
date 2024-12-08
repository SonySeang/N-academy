import {NextRequest, NextResponse} from "next/server";
import prisma from "@/prisma/client" ;
import schema from "@/app/api/user/schema";


export async function GET(request: NextRequest, {params}: { params: { id: string } }) {
    const id = parseInt(params.id)
    const userId = await prisma.user.findUnique({
        where: {
            id: id
        }
    })
    if (!userId)
        return NextResponse.json({error: 'User not found'}, {status: 404})

    return NextResponse.json(userId)
}

export async function POST(request: NextRequest) {
    const body = await request.json()
    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json({error: 'Invalid input'}, {status: 400})
    }
    const user = await prisma.user.findUnique({
        where: {email: body.email}
    })
    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email
        }
    })
    return NextResponse.json(newUser, {status: 201})
}

export async function PUT(
    request: NextRequest,
    {params}: { params: { id: string } }
) {
    const body = await request.json()
    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json({error: 'Invalid input'}, {status: 400})
    }
    const user = await prisma.user.findUnique({
        where: {id: parseInt(params.id)}
    })
    if (!user)
        return NextResponse.json({error: 'User not found'}, {status: 404})

    const updateUser = await prisma.user.update({
        where: {id: user.id},
        data: {
            name: body.name,
            email: body.email
        }
    })
    return NextResponse.json(updateUser)
}