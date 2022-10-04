import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import {
    Routes as Rout,
    Route,
    useLocation,
    useNavigate,
} from "react-router-dom"
import { LoadingForm } from "./components/loading/LoadingForm"

import { Account } from "./pages/Account"
import { Home } from "./pages/Home"
import { userSelector } from "./store/slices/userSlice"



export const Routes = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const { user, status } = useSelector(userSelector)

    useEffect(() => {
        if (status === 'loading') {

            navigate('/loading')
        }
        if (status === 'user' && !!user) {
            if (location.pathname !== '/') {
                navigate(location.pathname)
            } else {
                navigate('/account')
            }

        }
        if (status === '' || !!!user) {
            if (location.pathname !== '/account') {
                navigate(location.pathname)
            } else {
                navigate('/')
            }
        }
    }, [location.pathname, navigate, status, user])

    const ProtectRoute = () => {
        if (status === 'loading') {
            return <Route path="/loading" element={<LoadingForm />} />
        }
        if (status === 'user' && !!user) {
            return <Route path="/account" element={<Account />} />
        }
        return <Route path="/" element={<Home />} />
    }
    return (
        <Rout>
            {ProtectRoute()}
        </Rout>
    )
}
