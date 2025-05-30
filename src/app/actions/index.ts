
"use server"

import { signIn, signOut } from "@/auth"

export async function doSocialLogin(formData : any) {
    const action = formData.get('action')
    await signIn(action, {
        redirectTo: "/",
    })
    console.log(action)    
}

export async function doLogout() {
    await signOut({
        redirectTo : "/login",
    })
}