import {
	GET_ERRORS,
	USER_LOADING,
	SET_CURRENT_USER,
	REMOVE_CURRENT_USER
} from '../constants/index';

export interface AuthState {
	isAuthenticated: boolean | null,
  user: any | null,
  loading: boolean | null
}

export interface getErrorsAction {
	type: typeof GET_ERRORS
	payload: Object
}

export interface userLoadingAction {
	type: typeof USER_LOADING
	payload: any
}

export interface setCurrentUserAction {
	type: typeof SET_CURRENT_USER
	payload: any
}
export interface removeCurrentUserAction {
	type: typeof REMOVE_CURRENT_USER
	payload: any
}

export type authActions = 
getErrorsAction |
userLoadingAction |
setCurrentUserAction |
removeCurrentUserAction;
