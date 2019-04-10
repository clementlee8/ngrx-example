import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { User } from '../../models/user';
import * as fromActions from './../actions/user.action';
import { createFeatureSelector } from '@ngrx/store';

export interface ListUserState extends EntityState<User> {
    listUser: User[]
}

export interface CurrentUserState extends EntityState<User> {
    currentUser: User
}

export interface State {
    listUser: ListUserState,
    currentUser: CurrentUserState
}
export const adapterListUser: EntityAdapter<User> = createEntityAdapter<User>();
export const adapterCurrentUser: EntityAdapter<User> = createEntityAdapter<User>();
const listUserInitialState = adapterListUser.getInitialState(null);
const currentUserInitialState = adapterCurrentUser.getInitialState(null);

export const initialState: State = {
    listUser: listUserInitialState,
    currentUser: currentUserInitialState
}

export function userReducer(state: State = initialState, action: fromActions.All): State {
    switch(action.type) {
        case fromActions.UserActionType.LOAD_LIST_USER_SUCCESS:
            return {
                ...state,
                listUser: adapterListUser.addAll(action.payload, state.listUser)
            }
        default: 
            return state;
    }
}

export const selectUserState = createFeatureSelector<State>('users');
export const { selectAll: selectAllUser }  = adapterListUser.getSelectors();
export const { selectAll: selectUserCurrent } = adapterCurrentUser.getSelectors();
