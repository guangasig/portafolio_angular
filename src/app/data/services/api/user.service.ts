import { Injectable } from '@angular/core';
import { ApiclassClass } from '@data/schema/apiclass.class';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService extends ApiclassClass {

  private users: ICardUser[] = [];
  private user: ICardUser = {} as ICardUser;

  /**
   * Get all users from api
   * @returns users observable
   */
  getAllUsers(): Observable<{
    error: boolean,
    msg:string,
    data: ICardUser[]
  }> {

    const response = {
      error: false,
      msg: '',
      data: this.users,
    };
    
    return this.http.get<ICardUser[]>(this.url+'users').pipe(
      map(res => {
        response.data = res;
        return response;
      }),
      catchError(err => { return this.error(err, this.users) })
    );
    
  }

  /**
   * @param id number
   * @returns user observable
   */
  getUser(id: number): Observable<{
    error:boolean,
    msg:string,
    data:ICardUser
  }>{

    const response = {
      error: false,
      msg: '',
      data: this.user,
    };

    return this.http.get<ICardUser>(this.url+'users/'+id).pipe(
      map(res => {
        response.data = res;
        return response;
      }),
      catchError(err => { return this.error(err, this.user) })
    )
      
  }

}
