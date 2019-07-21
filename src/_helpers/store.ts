
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import reducers from '../_reducers'

const loggerMiddleware = createLogger()

export const store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
    ),
)
