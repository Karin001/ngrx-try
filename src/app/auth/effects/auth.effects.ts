import {Injectable} from '@angular/core';
import {Actions,Effect, ofType} from '@ngrx/effects';
import {map, exhaustMap,catchError} from 'rxjs/operators';
import {AuthActionTypes,Login} from '../actions/auth';
import {Authenticate} from '../models/user';
@Injectable() 
export class AuthEffects{
    @Effect()
    login$ = this.actions$.pipe(
        ofType(AuthActionTypes.Login),
        map((action:Login)=>action.payload),
        exhaustMap((auth:Authenticate)=>)
    )
    constructor(
        public actions$:Actions
    ){}
}