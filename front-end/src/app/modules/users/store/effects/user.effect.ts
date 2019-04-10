import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as fromActions from './../actions/user.action';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserEffects {
    constructor(private actions: Actions, private userSerivce: UserService) { }

    @Effect()
    loadListUser$: Observable<any> = this.actions.pipe(
        ofType(fromActions.UserActionType.LOAD_LIST_USER),
        map((action: fromActions.LoadListUser) => action.payload),
        switchMap(payload => {
            return this.userSerivce.loadListUser().pipe(
                map((data: any) => {
                    return new fromActions.LoadListUserSuccess(data);
                })
            )
        })
    );

    @Effect({ dispatch: false })
    loadListUserSuccess$: Observable<any> = this.actions.pipe(ofType(fromActions.UserActionType.LOAD_LIST_USER_SUCCESS));

}