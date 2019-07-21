import { combineReducers } from 'redux'

import alert from './alert.reducer'
import settings from './settings.reducer'

const rootReducer = combineReducers({
    alert,          // state.alert
    settings,       // state.settings
})

export default rootReducer
export type AppState = ReturnType<typeof rootReducer>
