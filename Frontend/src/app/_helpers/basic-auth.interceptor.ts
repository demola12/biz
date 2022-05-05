import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services';


@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with basic auth credentials if available
        const token = JSON.parse(localStorage.getItem('currentUser'))
        if (token) {
            request = request.clone({
                setHeaders: { 
                    "Authorization": `${token}`
                }
            });
        }
        return next.handle(request);
    }

     
}