import z from 'zod';
export const LoginSchema = z.object({
    name : z.string().min(10),
    email : z.string().email(),
    password : z.string()
})