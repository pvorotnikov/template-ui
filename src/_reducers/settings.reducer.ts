import * as settingConstants from  '../_constants/setting.constants'
import { AnyAction } from 'redux'

type State = {
  settingName: string,
  loading: boolean
}

const initialState: State = {
  settingName: 'settingValue',
  loading: false
}

export default function settings(state: State = initialState, action: AnyAction) {

  switch (action.type) {

    case settingConstants.UPDATE_REQUEST:
      return { ...state, loading: true }

    case settingConstants.UPDATE_SUCCESS:
      return { ...state, loading: false, [action.name]: action.value }

    case settingConstants.UPDATE_FAILURE:
      return { ...state, loading: false }

    default:
      return state

  }
}
