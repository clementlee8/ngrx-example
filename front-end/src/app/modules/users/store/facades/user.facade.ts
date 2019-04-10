import { Injectable } from "@angular/core";
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import * as fromState from './../reducers/user.reducer';
import { LoadListUser } from '../actions/user.action';

@Injectable({
    providedIn: 'root'
})
export class UserFacade {
    constructor(private store: Store<any>) {
        console.log('fuckkkk');

    }

    users$ = this.store.pipe(
        shareReplay(1),
        select(fromState.selectAllUser)
    );

    loadListUser(): void {
        this.store.dispatch(new LoadListUser());
    }

    async testEntities() {
        this.store.select(fromState.selectAllUser).subscribe(data => {
            console.log(data);
        });
        // this.store.select(fromState.selectIds).subscribe((data: any) => {
        //     console.log(data.filter((item) => item === 5));
        // });
        // this.store.select(fromState.selectTotal).subscribe(data => console.log("total",data));
    }
}