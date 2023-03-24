import { Injectable } from '@angular/core';
import { ApiclassClass } from '@data/schema/apiclass.class';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillsService extends ApiclassClass {


  getSkills(): Observable<{
    error: boolean,
    msg:string,
    data:null
  }> {

    const response = {
      error: false,
      msg: '',
      data: null
    }

    return this.http.get<null>(this.url+'skills').pipe(
      map(res => {
        response.data = res;
        return response;
      }),
      catchError(err => { return this.error(err, null) })
    );
  }
}
