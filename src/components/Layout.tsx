import { Box } from "@/kerry-ui"
import React, { PropsWithChildren } from "react"

export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <Box style={{ background: 'linear-gradient(90deg, #F58D50 50%, #F5F5F5 50%)', height: '100%', padding: '18px 8px', position: 'relative' }}>
            <Box style={{ position: 'absolute', top: '18px', left: '18px' }}>
                <img width='100px' height='auto' src="./images/kerryexpress_logo_white.svg" alt="kerry_logo_white" />
            </Box>
            <main style={{ height: '100%' }}>
                {children}
            </main>
        </Box>
    )
}