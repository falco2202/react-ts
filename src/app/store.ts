import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore
} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

const rootReducer = combineReducers({})

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
