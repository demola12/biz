import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';


import { useFunc } from 'ajv/dist/compile/util';
import { User } from '../_models';
import { environment } from 'src/environments/environment';
import { EndpointResponse, LoginInterface, RegisterInterface } from '../_models/all-interface';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<string>;
    public currentUser: Observable<string>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<string>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): string {
        return this.currentUserSubject.value;
    }

    login(loginDetails:LoginInterface):Observable<EndpointResponse> {
        
        
        return this.http.post<EndpointResponse>(`${environment.baseUrl}auth/login`, loginDetails)
            .pipe(map(user => {
                // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
                if(user.status){
                    localStorage.setItem('currentUser', JSON.stringify(user.token));
                }
                this.currentUserSubject.next(user.token);
                return user;
            }));
    }
    register(formData:RegisterInterface):Observable<EndpointResponse>{
        return this.http.post<any>(`${environment.baseUrl}auth/register`,formData )
    }
    ok(body?) {
        return of(new HttpResponse({ status: 200, body }))
    }
    error(message) {
        return throwError({ error: { message } });
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}