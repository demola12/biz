import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { select, Store } from '@ngrx/store';
import { filter, mergeMap, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DepartmentInterface } from '../model/department.interface';


@Injectable()
export class ProcessesService {
	constructor(private http: HttpClient, private store: Store<any>) {}

	public getDepartments(): Observable<any> {
		return this.http.get<{status:boolean;data:DepartmentInterface[];message:string}>(`${environment.baseUrl}view/department` )
	}
	
}
