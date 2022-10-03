import { Box } from "@/kerry-ui"
import React, { PropsWithChildren } from "react"

export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <Box style={{ background: 'linear-gradient(90deg, #F58D50 50%, #F5F5F5 50%)', height: '100%' }}>
            <main>
                {children}
            </main>
        </Box>
    )
}