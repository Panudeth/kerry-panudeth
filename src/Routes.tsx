import React from "react"
import {
    Routes as Rout,
    Route
} from "react-router-dom"

import { Account } from "./pages/Account"
import { Home } from "./pages/Home"

export const Routes = () => {
    return (
        <Rout>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<Account />} />
        </Rout>


    )
}
