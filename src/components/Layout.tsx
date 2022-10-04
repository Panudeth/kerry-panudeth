import { auth } from "@/firebase/firebaseConfig"
import { Box } from "@/kerry-ui"
import { setUser } from "@/store/slices/userSlice"
import { useAppDispacth } from "@/store/store"
import { onAuthStateChanged } from "firebase/auth"
import React, { PropsWithChildren, useEffect } from "react"

export const Layout = ({ children }: PropsWithChildren) => {
    const dispatch = useAppDispacth()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            dispatch(setUser({ user, status: auth ? 'user' : '' }))
        })
        unsubscribe()
    }, [dispatch])

    return (
        <Box
            style={{
                background: 'linear-gradient(90deg, #F58D50 50%, #F5F5F5 50%)', height: '100%', padding: '50px 8px 18px 8px', position: 'relative'
            }}>
            <Box style={{ position: 'absolute', top: '18px', left: '18px' }}>
                <img width='100px' height='auto' src="./images/kerryexpress_logo_white.svg" alt="kerry_logo_white" />
            </Box>
            <main style={{ height: '100%' }}>
                {children}
            </main>
        </Box>
    )
}