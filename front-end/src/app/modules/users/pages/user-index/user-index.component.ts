import { Component, OnInit } from '@angular/core';
import { UserFacade } from '../../store/facades/user.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.scss']
})
export class UserIndexComponent implements OnInit {
  listUser$: Observable<any>;
  constructor(private userStoreFacade: UserFacade) { }

  ngOnInit() {
    this.userStoreFacade.loadListUser();
    this.listUser$ = this.userStoreFacade.users$;
    this.userStoreFacade.testEntities();
  }

}
