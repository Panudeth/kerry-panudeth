import React from "react"
import { Box, Button, Card } from "@/kerry-ui"
import { setUser, userSelector } from "@/store/slices/userSlice"
import { useSelector } from "react-redux"
import { auth } from "@/firebase/firebaseConfig"
import { signOut } from "firebase/auth"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { setDialog } from "@/store/slices/dialogSlice"
import { useAppDispacth } from "@/store/store"

export const Account = () => {
    const { user } = useSelector(userSelector)
    const MySwal = withReactContent(Swal)

    const dispatch = useAppDispacth()


    const handleSignOut = () => {
        dispatch(setUser({user:null, status: 'loading' }))
        signOut(auth).then(() => {
            dispatch(setUser({ user: null, status: '' }))
            dispatch(setDialog({ dialog: 'signIn' }))
        }).catch((e) => {
            MySwal.fire({
                title: <p>Error!</p>,
                text: e.message,
                icon: 'error',
                showConfirmButton: false
            })
        })
    }

    return (
        <Box style={{ display: 'flex', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Box style={{ width: '100%', height: 'fit-content', display: 'flex', transition: '0.4s' }}>
                <Card width='100%' height='100%' maxWidth={750} maxHeight={820}
                    padding='2rem 18px' angle="rounded" margin='auto' overflow="auto" style={{ textAlign: 'center' }}>
                    <img src="./images/wellcome.svg" alt="wellcome to kerry" width='100%' style={{ maxWidth: '630px' }} />
                    <span style={{ fontSize: '24px' }}>Wellcome to <span style={{ color: 'var(--kerry-main)' }}>Kerry Express</span></span>
                    <Box>
                        <span style={{ fontSize: '58px' }}>
                            {user?.displayName}
                        </span>
                    </Box>
                    <Button onClick={handleSignOut}>Back to home</Button>
                </Card>
            </Box>
        </Box>
    )

}