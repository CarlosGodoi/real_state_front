import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

const loginSchema = z.object({
    email: z.string().trim().min(1, { message: "E-mail obrigatório" }),
    senha: z.string().min(6, { message: "Senha obrigatória" })
}).required()

export const resolver = zodResolver(loginSchema)

export type FormData = z.infer<typeof loginSchema>

export const defaultValues: FormData = {
    email: "",
    senha: ""
}