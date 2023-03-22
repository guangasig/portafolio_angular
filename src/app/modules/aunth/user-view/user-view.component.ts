import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { USERS_DATA } from '@data/constants/users.constants';
import { UserService } from '@data/services/api/user.service';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})

export class UserViewComponent implements OnChanges, OnInit {

  public users:ICardUser[] = USERS_DATA;
  public user:ICardUser = {} as ICardUser;

  public id:number;
  public currentUser:ICardUser = {} as ICardUser;
  

  ngOnChanges(): void {
    console.log('changes');
  }

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ){
    console.log('route',this.route.snapshot.params);
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(){

    // this.user = this.users.filter(user => user.id == this.id)[0];

    this.userService.getUser(this.id).subscribe(response => {
      if (!response.error){
        this.currentUser = response.data;
      }else{
        this.currentUser = {} as ICardUser;;
      }
    });

    console.log(this.currentUser,this.userService, this.users);
  }

}
