import { AuthActionTypes,AuthAction} from '../actions/auth';
import { User } from '../models/user';
export interface State{
    loggedIn:boolean;
    user:User | null;
}
export const initialState:State = {
    loggedIn:false,
    user:null
}
export function reducer(state:State = initialState, action:AuthAction){
    switch (action.type) {
        case AuthActionTypes.LoginSuccess:
            return {
                loggedIn:true,
                user:action.payload.name
            }
        case AuthActionTypes.Logout:
            return {
                loggedIn:false,
                user:null
            }
        default:
            return state;
    }
}
export const getLoggedIn = (state:State)=>state.loggedIn;
export const getUser = (state:State)=>state.user;