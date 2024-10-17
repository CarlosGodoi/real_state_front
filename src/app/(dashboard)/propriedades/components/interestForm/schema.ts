import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const interestFromSchema = z.object({
    firstName: z.string().min(1, { message: 'Primeiro nome obrigatório.' }),
    lastName: z.string().min(1, { message: 'Primeiro sobrenome obrigatório.' }),
    email: z.string().email({ message: 'E-mail obrigatório.' }),
    phone: z.string().min(1, { message: 'Telefone obrigatório.' }),
    location: z.string(),
    typeProperty: z.string(),
    bathrooms: z.string(),
    bedrooms: z.string(),
    budget: z.string(),
    message: z.string(),
    termsAccepted: z.boolean()
})

export const resolver = zodResolver(interestFromSchema)

export type FormData = z.infer<typeof interestFromSchema>

export const defaultValues: FormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    typeProperty: '',
    bathrooms: '',
    bedrooms: '',
    budget: '',
    message: '',
    termsAccepted: false
}