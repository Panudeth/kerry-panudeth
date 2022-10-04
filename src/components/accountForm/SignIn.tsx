import useMediaQuery from "@/hook/useMediaQuery"
import { Box, Card, Input, Button, Row, Column } from "@/kerry-ui"
import React, { Fragment } from "react"
import { Controller, useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "@/firebase/firebaseConfig"
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content"
import { useAppDispacth } from "@/store/store"
import { setUser } from "@/store/slices/userSlice"
import { setDialog } from "@/store/slices/dialogSlice"

export type RegisterInputs = {
    username: string,
    email: string,
    phone: string,
    password: string,
    confirm: string,
}

const schema = yup.object({
    email: yup.string().email().required('not a valid email'),
    password: yup.string().required('required'),
}).required()

export const SignIn = () => {
    const dispatch = useAppDispacth()

    const matches = useMediaQuery('(max-width: 768px)')
    const MySwal = withReactContent(Swal)

    const { handleSubmit, control, formState: { errors } } = useForm<RegisterInputs>({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: yupResolver(schema)
    })

    console.log('error', errors)

    const handleSignup = async (values: RegisterInputs) => {
        const { email, password } = values

        try {
            const authData = await signInWithEmailAndPassword(auth, email, password)
            await signInWithEmailAndPassword(auth, email, password)
            dispatch(setUser({ user: authData.user, status: auth ? 'user' : '' }))
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

    const handleChangedialog = () => {
        dispatch(setDialog({ dialog: 'signUp' }))
    }


    return (
        <Fragment>
            <Row >
                <Column sm={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                    <h2 style={{ fontWeight: 'lighter', margin: 0 }}>Wellcome to
                        <span style={{ color: "var(--kerry-main)", fontWeight: 'lighter', marginLeft: '8px' }}>Kerry Express</span>
                    </h2>
                </Column>
                <Column sm={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Box style={{ display: 'flex', flexDirection: matches ? "row" : 'column', alignItems: matches ? 'cener' : 'normal' }}>
                        <span style={{ fontSize: '14px', color: '#8D8D8D' }}>Don't have Account ?</span>

                        <span onClick={handleChangedialog} style={{ color: "var(--kerry-main)", fontWeight: 'lighter', fontSize: '14px', cursor: 'pointer' }}>Sign up</span>
                    </Box>
                </Column>
            </Row>
            <h1 style={{ fontWeight: 'bold', margin: 0, fontSize: '3rem', marginLeft: '2rem', textAlign: matches ? 'center' : undefined }}>Sign in</h1>
            <Box style={{ maxWidth: '431px', margin: 'auto' }}>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => <Input field={field} margin={matches ? '4% auto' : undefined} icon="./images/email_outline.svg" label="Email" />}
                    />
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => <Input field={field} margin={matches ? '4% auto' : undefined} icon="./images/pass_outline.svg" label="Password"
                            type='password'
                        />}
                    />
                    <Button type='submit'>
                        <span style={{ fontSize: '14px' }}>Sign in</span>
                    </Button>
                </form>
            </Box>
        </Fragment>

    )
}