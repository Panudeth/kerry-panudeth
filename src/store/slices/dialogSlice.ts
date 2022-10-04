import {
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit"
import { RootState } from "../store"

type IDialog = 'signUp' | 'signIn'

export type DialogType = {
    dialog: IDialog
}

const initialState: DialogType = {
    dialog: 'signUp'
}

const dialogSlice = createSlice({
    initialState,
    name: 'dialog',
    reducers: {
        setDialog: (state: DialogType, action: PayloadAction<DialogType>) => {
            state.dialog = action.payload.dialog
        }
    },
    extraReducers: {}
})

export const { setDialog } = dialogSlice.actions
export const dialogSelector = (store: RootState) => store.dialogReducer
export default dialogSlice.reducer