import { layoutActionTypes, layoutActions} from '../actions/layout'

export interface State {
    showSidenav:boolean;
}
export const initialState:State = {
    showSidenav: false
}
export function reducer(state:State=initialState,actions:layoutActions):State{
    switch (actions.type) {
        case layoutActionTypes.openSideNav:
            return {
                showSidenav:true
            }
        case layoutActionTypes.closeSideNav:
            return {
                showSidenav:false
            }
        case layoutActionTypes.toggleSideNav:
            return {
                showSidenav:!state.showSidenav
            }
        default:
            return state
    }
}
export const getShowSidenav = (state:State)=>state.showSidenav;