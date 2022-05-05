import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { ProcessesService } from '../services/processes.service';
import { ActionTypes, ProcessesSuccessAction } from './processes.action';

@Injectable()
export class ProcessesEffects {
	public loadProcesses$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ActionTypes.PROCESSES),
			mergeMap(res =>
				this.processesService.getDepartments().pipe(
					map((serviceRes) => {
						return new ProcessesSuccessAction(serviceRes.data);
					}),
					catchError(() => {
						return EMPTY;
					})
				)
			)
		)
	);

	constructor(private actions$: Actions, private processesService: ProcessesService) {}
}
