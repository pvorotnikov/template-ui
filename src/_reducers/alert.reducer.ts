import * as alertConstants from '../_constants/alert.constants'
import { AnyAction } from 'redux';

type State = {
  type?: string,
  message?: string,
}

export default function alert(state: State = {}, action: AnyAction) {

  switch (action.type) {

    case alertConstants.SUCCESS:
      return { type: 'success', message: action.message, }

    case alertConstants.ERROR:
      return { type: 'error', message: action.message, }

    case alertConstants.WARNING:
      return { type: 'warning', message: action.message, }

    case alertConstants.CLEAR:
      return {}

    default:
      return state
  }

}
