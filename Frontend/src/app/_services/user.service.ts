import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ProcessInterface, SaveStepInterface, StepInterface } from '../processes/model/department.interface';
import { RegularResponse } from '../_models/all-interface';
@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    stepDoneAndUndone(payload:StepInterface):Observable<RegularResponse> {
        return this.http.post<RegularResponse>(`${environment.baseUrl}view/stepdone`,payload);
    }
    processPositionUpdate(payload:ProcessInterface[]):Observable<RegularResponse> {
        return this.http.post<RegularResponse>(`${environment.baseUrl}view/processpositionupdate`,payload);
    }
    addDepartment(payload:{name:string}):Observable<RegularResponse> {
        return this.http.post<RegularResponse>(`${environment.baseUrl}view/department`,payload);
    }
    saveProcess(payload:SaveStepInterface):Observable<RegularResponse> {
        return this.http.post<RegularResponse>(`${environment.baseUrl}view/saveprocess`,payload);
    }

    
}