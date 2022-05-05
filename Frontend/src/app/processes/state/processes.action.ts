import { Action } from '@ngrx/store';
import { DepartmentInterface } from '../model/department.interface';

export enum ActionTypes {
	PROCESSES = '[Processes] Request',
	PROCESSES_SUCCESS = '[Processes] Success'
}

export class ProcessesAction implements Action {
	readonly type = ActionTypes.PROCESSES;
	constructor() {}
}
export class ProcessesSuccessAction implements Action {
	readonly type = ActionTypes.PROCESSES_SUCCESS;
	constructor(public payload: DepartmentInterface[]) {}
}
export type Actions = ProcessesAction | ProcessesSuccessAction;
