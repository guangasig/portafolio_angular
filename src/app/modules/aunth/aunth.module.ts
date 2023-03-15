import { NgModule } from '@angular/core';
import { AunthRoutingModule } from './aunth-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from 'app/shared/shared.module';
import { UserViewComponent } from './user-view/user-view.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserViewComponent
  ],
  imports: [
    SharedModule,
    AunthRoutingModule,
  ],
})
export class AunthModule { }
