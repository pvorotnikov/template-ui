import * as alertConstants from '../_constants/alert.constants'
import { AnyAction } from 'redux'


export function success(message: string): AnyAction {
    return { type: alertConstants.SUCCESS, message }
}

export function error(message: string): AnyAction {
    return { type: alertConstants.ERROR, message }
}

export function warning(message: string): AnyAction {
    return { type: alertConstants.WARNING, message }
}

export function clear(): AnyAction {
    return { type: alertConstants.CLEAR }
}
