import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import userReducer from './slices/userSlice'
import dialogReducer from './slices/dialogSlice'

const reducer = {
    userReducer,
    dialogReducer,
}

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    devTools: process.env.NODE_ENV === 'development'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispacth = () => useDispatch<AppDispatch>()