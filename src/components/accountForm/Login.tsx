import useMediaQuery from "@/hook/useMediaQuery"
import { Box, Card, Input, Button, Row, Column } from "@/kerry-ui"
import React from "react"
import { Controller, useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "@/firebase/firebaseConfig"
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content"

export type RegisterInputs = {
    username: string,
    email: string,
    phone: string,
    password: string,
    confirm: string,
}

const schema = yup.object({
    username: yup.string().required('required'),
    email: yup.string().email().required('not a valid email'),
    phone: yup.string().required('required'),
    password: yup.string().required('required'),
    confirm: yup.string()
        .oneOf([yup.ref('password'), null], 'password does not match'),
}).required()

export const Login = () => {
    const matches = useMediaQuery('(max-width: 768px)')
    const MySwal = withReactContent(Swal)

    const { handleSubmit, control, formState: { errors } } = useForm<RegisterInputs>({
        defaultValues: {
            username: '',
            email: '',
            phone: '',
            password: '',
            confirm: '',
        },
        resolver: yupResolver(schema)
    })

    console.log('error', errors)

    const handleSignup = async (values: RegisterInputs) => {
        const { email, password, username } = values

        try {
            const authData = await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(authData.user, { displayName: username })
        } catch (e: any) {
            console.error(e)
            MySwal.fire({
                title: <p>Error!</p>,
                text: e.message,
                icon: 'error',
                showConfirmButton: false
            })
        }
    }


    return (
        <Box style={{ width: '100%', height: '100%', display: 'flex' }}>
            <Card width='100%' height='100%' maxWidth={750} maxHeight={820}
                padding='2rem 18px' angle="rounded" margin='auto' overflow="auto" >
                <Row >
                    <Column sm={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                        <h2 style={{ fontWeight: 'lighter', margin: 0 }}>Wellcome to
                            <span style={{ color: "var(--kerry-main)", fontWeight: 'lighter', marginLeft: '8px' }}>Kerry Express</span>
                        </h2>
                    </Column>
                    <Column sm={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Box style={{ display: 'flex', flexDirection: matches ? "row" : 'column', alignItems: matches ? 'cener' : 'normal' }}>
                            <span style={{ fontSize: '14px', color: '#8D8D8D' }}>Have an Account ?</span>
                            <Link to='#'
                                style={{
                                    textDecoration: 'none',
                                    color: "var(--kerry-main)"
                                }}
                            >
                                <span style={{ color: "var(--kerry-main)", fontWeight: 'lighter', fontSize: '14px' }}>Sign in</span>
                            </Link>
                        </Box>
                    </Column>
                </Row>
                <h1 style={{ fontWeight: 'bold', margin: 0, fontSize: '3rem', marginLeft: '2rem', textAlign: matches ? 'center' : undefined }}>Sign up</h1>
                <Box style={{ maxWidth: '431px', margin: 'auto' }}>
                    <form onSubmit={handleSubmit(handleSignup)}>
                        <Controller
                            name="username"
                            control={control}
                            render={({ field }) => <Input field={field} margin={matches ? '4% auto' : undefined} icon="./images/account_outline.svg" label="Username" />}
                        />
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => <Input field={field} margin={matches ? '4% auto' : undefined} icon="./images/account_outline.svg" label="Email" />}
                        />
                        <Controller
                            name="phone"
                            control={control}
                            render={({ field }) => <Input field={field} margin={matches ? '4% auto' : undefined} icon="./images/account_outline.svg" label="Phone" />}
                        />
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => <Input field={field} margin={matches ? '4% auto' : undefined} icon="./images/account_outline.svg" label="Password"
                                type='password'
                            />}
                        />
                        <Controller
                            name="confirm"
                            control={control}
                            render={({ field }) => <Input field={field} margin={matches ? '4% auto' : undefined} icon="./images/account_outline.svg" label="Confirm Password"
                                type='password'
                            />}
                        />
                        <Button type='submit'>
                            <span style={{ fontSize: '14px' }}>Sign up</span>
                        </Button>
                    </form>
                </Box>
            </Card>
        </Box>
    )
}