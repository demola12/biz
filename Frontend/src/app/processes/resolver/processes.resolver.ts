import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { Store } from '@ngrx/store';
import { ProcessesAction } from '../state/processes.action';
import { ProcessesService } from '../services/processes.service';


@Injectable()
export class ProcessesResolver implements Resolve<any[]> {
	constructor( public processStore: Store<any>,private processesService:ProcessesService) {}

	public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {
		this.processStore.dispatch(
			new ProcessesAction()
		);
		return forkJoin([this.processesService.getDepartments()]);
	}
}
