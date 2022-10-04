import { auth } from "@/firebase/firebaseConfig"
import { Box, Column, Row } from "@/kerry-ui"
import { setUser, userSelector } from "@/store/slices/userSlice"
import { useAppDispacth } from "@/store/store"
import { onAuthStateChanged } from "firebase/auth"
import React, { PropsWithChildren, useEffect } from "react"
import { useSelector } from "react-redux"
import { LoadingForm } from "./loading/LoadingForm"

export const Layout = ({ children }: PropsWithChildren) => {
    const dispatch = useAppDispacth()
    const { status } = useSelector(userSelector)

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
            <Box style={{ position: 'absolute', top: '18px', left: '18px', width: '45%' }}>
                <Row style={{ width: '100%' }}>
                    <Column md={2} sm={12}>
                        <img width='100px' height='auto' src="./images/kerryexpress_logo_white.svg" alt="kerry_logo_white" />
                    </Column>
                    <Column  sm={10} style={{ margin: 'auto 0' }}>
                        {status === 'loading' && <LoadingForm />}
                    </Column>
                </Row>
            </Box>
            <main style={{ height: '100%' }}>
                {children}
            </main>
        </Box>
    )
}