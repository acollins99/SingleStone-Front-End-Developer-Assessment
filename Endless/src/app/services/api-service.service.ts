/* 
API Service - Queries RESTful API for steps that are rendered 
              in the how-it-works component. The component in 
              question has additional logic to handle the returned
              Observable from the HTTP GET request in the getStepsData
              function. 
*/
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

//Interface Imports
import { StepsMetaData } from '../interfaces/endless-interfaces'

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private apiEndpoint = "default/FrontEndCodeChallenge"
  private apiUrl = environment.API_URL + this.apiEndpoint

  constructor(private http: HttpClient) { }

  getStepsData(): Observable<StepsMetaData> {
    return this.http.get<StepsMetaData>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() =>
          `Error retrieving travellers data. ${error.statusText || "Unknown"} `
        );
      })
    );
  }
}



