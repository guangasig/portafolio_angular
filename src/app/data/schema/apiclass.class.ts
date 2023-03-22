import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ApiclassClass {

    public url = environment.apiUrl;
    public isProduction = environment.production;
    
    constructor( public http: HttpClient ) { }

    error(error: HttpErrorResponse, data: any) {

        let errorMessage = "";

        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }else{
            errorMessage = `Error code: ${error.status} \ message: ${error.toString}`;
        }
        
        return of({
            error:true,
            msg:errorMessage,
            data:data,
        })
    }

}
