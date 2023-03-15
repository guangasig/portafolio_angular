import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { USERS_DATA } from '@data/constants/users.constants';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})

export class UserViewComponent implements OnInit {

  public users:ICardUser[] = USERS_DATA;
  public user:ICardUser = {} as ICardUser;

  public id:number;

  constructor(route: ActivatedRoute){
    this.id = route.snapshot.params['id'];
  }

  ngOnInit(){
   this.user = this.users.filter(user => user.id == this.id)[0];
   console.log(this.user, this.users);
  }

}
