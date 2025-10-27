import { Roles } from "@/@types/clerk";
import { auth } from "@clerk/nextjs/server";

// Esta função deve ser usada apenas em Server Components ou API Routes, não no middleware
export const checkRole = async (role: Roles) => {
    const { sessionClaims } = await auth();
    return sessionClaims?.metadata?.role === role;  
}

// Função helper para verificar se o usuário tem permissão no middleware
export const hasRoleInClaims = (sessionClaims: any, role: Roles): boolean => {
    return sessionClaims?.metadata?.role === role;
}