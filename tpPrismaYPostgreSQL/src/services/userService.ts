import { PrismaClient, Usuario} from '@prisma/client'

const prisma = new PrismaClient();

export const getUsers = () => {
    return prisma.usuario.findMany()
}

export const getUserById = (id : string) => {
    return prisma.usuario.findUnique({where : { id }})
}

export const registerUser = (data : {nombre : string, email : string, password : string}) => {
    return prisma.usuario.create({data})
} 

export const updateUser = (id : string, data : {nombre? : string, email? : string, password? : string}) => {
    return prisma.usuario.update({where : {id}, data})
}

export const deleteUser = (id : string) => {
    return prisma.usuario.delete({where : {id}})
}