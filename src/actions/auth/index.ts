"use server"
import prisma from "@/lib/prisma"

export const onCompleteUserRegistration = async(
    fullname:string,
    clerkId:string,
    type:string
) => {
    try {
        const registered = await prisma.user.create({
            data:{
                clerkId,
                fullname,
                type,
                subscription:{
                    create:{},
                },
            },
            select:{
                fullname:true,
                type:true,
                id:true
            }
            }
        )
        if(registered){
            return {status:200, user:registered}
        }
    } catch (error) {
        return {status:400}
    }
}