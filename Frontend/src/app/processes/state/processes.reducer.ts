import { Actions, ActionTypes } from './processes.action';
export function ProcessesReducer(state: any, action: Actions) {
	switch (action.type) {
		case ActionTypes.PROCESSES_SUCCESS:
			return {
				...state,
				processes: action.payload
			};

		default:
			return state;
	}
}
