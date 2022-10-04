import useMediaQuery from "@/hook/useMediaQuery"
import { Box, Input, Button, Row, Column } from "@/kerry-ui"
import React, { Fragment } from "react"
import { Controller, useForm } from "react-hook-form"
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
    username: yup.string().required('required'),
    email: yup.string().email().required('not a valid email'),
    phone: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid').required('required'),
    password: yup.string().min(6, 'minimum 6 characters ').required('required'),
    confirm: yup.string()
        .oneOf([yup.ref('password'), null], 'password does not match'),
}).required('required')

export const SignUp = () => {
    const dispatch = useAppDispacth()

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

    const handleSignup = async (values: RegisterInputs) => {
        const { email, password, username } = values

        try {
            dispatch(setUser({ user: null, status: 'loading' }))
            const authData = await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(authData.user, { displayName: username })
            await signInWithEmailAndPassword(auth, email, password)
            dispatch(setUser({ user: authData.user, status: auth ? 'user' : '' }))
        } catch (e: any) {
            console.error(e)
            dispatch(setUser({ user: null, status: '' }))
            MySwal.fire({
                title: <p>Error!</p>,
                text: e.message.replace('Firebase: Error', ''),
                icon: 'error',
                showConfirmButton: false
            })
        }
    }

    const handleChangedialog = () => {
        dispatch(setDialog({ dialog: 'signIn' }))
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
                        <span style={{ fontSize: '14px', color: '#8D8D8D' }}>Have an Account ?</span>

                        <span onClick={handleChangedialog} style={{ color: "var(--kerry-main)", fontWeight: 'lighter', fontSize: '14px', cursor: 'pointer' }}>Sign in</span>

                    </Box>
                </Column>
            </Row>
            <h1 style={{ fontWeight: 'bold', margin: 0, fontSize: matches ? '2rem' : '3rem', marginLeft: '2rem', textAlign: matches ? 'center' : undefined }}>Sign up</h1>
            <Box style={{ maxWidth: '431px', margin: 'auto' }}>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <Controller
                        name="username"
                        control={control}
                        render={({ field }) => <Input field={field} margin={matches ? '0 auto' : undefined} icon="./images/account_outline.svg" label="Username" errors={errors.username && errors.username.message ? errors.username.message : ''} />}
                    />
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => <Input field={field} margin={matches ? '0 auto' : undefined} icon="./images/email_outline.svg" label="Email" errors={errors.email && errors.email.message ? errors.email.message : ''} />}
                    />
                    <Controller
                        name="phone"
                        control={control}
                        render={({ field }) => <Input field={field} margin={matches ? '0 auto' : undefined} icon="./images/phone_outline.svg" label="Phone" errors={errors.phone && errors.phone.message ? errors.phone.message : ''} />}
                    />
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => <Input field={field} margin={matches ? '0 auto' : undefined} icon="./images/pass_outline.svg" label="Password"
                            type='password' errors={errors.password && errors.password.message ? errors.password.message : ''}
                        />}
                    />
                    <Controller
                        name="confirm"
                        control={control}
                        render={({ field }) => <Input field={field} margin={matches ? '0 auto 4% auto' : undefined} icon="./images/pass_outline.svg" label="Confirm Password"
                            type='password' errors={errors.confirm && errors.confirm.message ? errors.confirm.message : ''}
                        />}
                    />
                    <Button type='submit'>
                        <span style={{ fontSize: '14px' }}>Sign up</span>
                    </Button>
                </form>
            </Box>
        </Fragment>

    )
}