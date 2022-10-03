import { Login } from "@/components/accountForm/Login"
import { Box } from "@/kerry-ui"
import React from "react"

export const Home = () => {
    return (
            <Box style={{ display: 'flex', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Login />
            </Box>
    )
}