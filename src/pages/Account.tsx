import { userSelector } from "@/store/slices/userSlice"
import React from "react"
import { useSelector } from "react-redux"

export const Account = () => {
    const { user } = useSelector(userSelector)
    return <div>
        {user?.displayName}
    </div>
}