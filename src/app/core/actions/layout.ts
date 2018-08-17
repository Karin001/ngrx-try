import { Action } from '@ngrx/store';

export enum layoutActionTypes  {
    openSideNav = '[layout] Open Sidenav',
    closeSideNav = '[layout] Close Sidenav',
    toggleSideNav = '[layout] Toggle Sidenav'
}
export class OpenSidenav implements Action{
    readonly type = layoutActionTypes.openSideNav;
}
export class CloseSidenav implements Action{
    readonly type = layoutActionTypes.closeSideNav;
}
export class ToggleSidenav implements Action{
    readonly type = layoutActionTypes.toggleSideNav; 
}
export type layoutActions = OpenSidenav | CloseSidenav | ToggleSidenav;