import * as settingConstants from '../_constants/setting.constants'
import * as alertActions from './alert.actions'
import { Dispatch, ActionCreator } from 'redux'


const updateRequest = async (name: string, value: string) => {
  return Promise.resolve({ name, value })
}

export const update: ActionCreator<any> = (name: string, value: string) => {

  return async (dispatch: Dispatch) => {

    try {

      dispatch(request())
      const response = await updateRequest(name, value)
      dispatch(success(response.name, response.value))
    } catch (err) {

      dispatch(alertActions.error(err.message))
      dispatch(failure())
    }

    function request() { return { type: settingConstants.UPDATE_REQUEST } }
    function success(name: string, value: string ) { return { type: settingConstants.UPDATE_SUCCESS, name, value } }
    function failure() { return { type: settingConstants.UPDATE_FAILURE } }
  }

}
