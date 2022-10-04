import {
    // createAsyncThunk,
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit"
import { User } from "firebase/auth"
import { RootState } from "../store"

type IStatus = 'loading' | 'user' | ''

export type AuthType = {
    user: User | null,
    status: IStatus
}

const initialState: AuthType = {
    user: null,
    status: 'loading'
}

const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {
        setUser: (state: AuthType, action: PayloadAction<AuthType>) => {
            state.user = action.payload.user
            state.status = action.payload.status
        }
    },
    extraReducers: {}
})

export const { setUser } = userSlice.actions
export const userSelector = (store: RootState) => store.userReducer
export default userSlice.reducer