import { Action } from '@ngrx/store';
export enum UserActionType {
    LOAD_LIST_USER = '[USER] Load list user',
    LOAD_LIST_USER_SUCCESS = '[USER] Load list user success'
}

export class LoadListUser implements Action {
    readonly type = UserActionType.LOAD_LIST_USER;
    constructor(public payload?: any) { }
}

export class LoadListUserSuccess implements Action {
    readonly type = UserActionType.LOAD_LIST_USER_SUCCESS;
    constructor(public payload: any) { }
}

export type All =   LoadListUser
                |   LoadListUserSuccess ;