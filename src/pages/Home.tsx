import React from "react"
import { SignUp } from "@/components/accountForm/SignUp"
import { Box, Card } from "@/kerry-ui"
import { dialogSelector } from "@/store/slices/dialogSlice"
import { useSelector } from "react-redux"
import { SignIn } from "@/components/accountForm/SignIn"

export const Home = () => {
    const { dialog } = useSelector(dialogSelector)

    return (
        <Box style={{ display: 'flex', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Box style={{ width: '100%', height: dialog === 'signUp' ? '100%' : 'fit-content', display: 'flex', transition: '0.4s' }}>
                <Card width='100%' height='100%' maxWidth={750} maxHeight={820}
                    padding='2rem 18px' angle="rounded" margin='auto' overflow="auto">
                    {dialog === 'signUp' && <SignUp />}
                    {dialog === 'signIn' && <SignIn />}
                </Card>
            </Box>
        </Box>
    )
}