import { Component, Inject, OnInit } from '@angular/core';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
import { USERS_DATA } from '@data/constants/users.constants';
import { UserService } from '@data/services/api/user.service';
import { ApiclassClass } from '@data/schema/apiclass.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})

export class UserListComponent implements OnInit {

  // public users: ICardUser[] = USERS_DATA; 
  public users: ICardUser[] = [];

  constructor(private userService: UserService){
    this.userService.getAllUsers().subscribe(response => {
      if(!response.error){
        this.users = response.data;
      }else{
        this.users = [];
      }
    });
  }

  ngOnInit(){

  }

}
