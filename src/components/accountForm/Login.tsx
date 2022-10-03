import { Box, Card, Input, Button } from "@/kerry-ui"
import React from "react"

export const Login = () => {
    return (
        <Box style={{ width: '100%', height: '100%', display: 'flex' }}>
            <Card width='100%' height='100%' maxWidth={750} maxHeight={820}
                padding='2rem 4rem' angle="rounded" margin='auto'>
                <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                    <h2 style={{ fontWeight: 'lighter', margin: 0 }}>Wellcome to
                        <span style={{ color: "var(--kerry-main)", fontWeight: 'lighter', marginLeft: '8px' }}>Kerry Express</span>
                    </h2>
                    <Box style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '14px' }}>Have an Account ?</span>
                        <span style={{ color: "var(--kerry-main)", fontWeight: 'lighter', fontSize: '14px' }}>Sign in</span>
                    </Box>
                </Box>
                <Box>
                    <h1 style={{ fontWeight: 'bold', margin: 0, fontSize: '3rem' }}>Signup</h1>
                    <Input icon="./images/account_outline.svg" label="Username" />
                    <Input icon="./images/email_outline.svg" label="Email" />
                    <Input icon="./images/phone_outline.svg" label="Phone" />
                    <Input icon="./images/pass_outline.svg" label="Password" />
                    <Input icon="./images/pass_outline.svg" label="Confirm Password" />
                    <Button>
                        <span>Sign up</span>
                    </Button>
                </Box>
            </Card>
        </Box>
    )
}