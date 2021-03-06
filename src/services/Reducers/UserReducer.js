import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_FAIL,
  USER_LIST_SUCCESS,
  USERS_PROFILE_FAIL,
  USERS_PROFILE_SUCCESS,
  USERS_PROFILE_REQUEST,
  USER_REMOVE_REQUEST,
  USER_REMOVE_SUCCESS,
  USER_REMOVE_FAIL,
} from '../constants/UserConstants'

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true }
    case USER_REGISTER_SUCCESS:
      return { loading: false, result: action.payload }
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return { loading: true }
    case USER_PROFILE_SUCCESS:
      return { loading: false, result: action.payload }
    case USER_PROFILE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const usersUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USERS_PROFILE_REQUEST:
      return { loading: true }
    case USERS_PROFILE_SUCCESS:
      return { loading: false, result: action.payload }
    case USERS_PROFILE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const userListReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true, users: [] }
    case USER_LIST_SUCCESS:
      return { loading: false, users: action.payload }
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REMOVE_REQUEST:
      return { loading: true, users: [] }
    case USER_REMOVE_SUCCESS:
      return { loading: false, success: true }
    case USER_REMOVE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
