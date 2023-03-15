import { Component } from '@angular/core';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent {

  public user: ICardUser = {
    avatar:'https://mlhmvq6amqed.i.optimole.com/w:1152/h:605/q:mauto/f:avif/https://ideapod.com/wp-content/uploads/2023/01/food-waste-and-climate-change.png',
    name:'Vero Patricia',
    bio:'Me gusta programacion',
    email:'guangasigtsm@gmail.com',
    phone:'0995819939',
  }

}
