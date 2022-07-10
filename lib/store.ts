import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import authReducer from '../components/Auth/authSlice'
import projectReducer from '../components/Projects/projectSlice'

export function makeStore() {
    return configureStore({
        reducer: {
            auth: authReducer,
            projects: projectReducer,
        },
    })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>

export default store