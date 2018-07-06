import { combineReducers, Reducer } from 'redux';
import { TodoListReducers } from '@app/core/todo-list/redux-api/todo-list.reducers';
import { AppState } from '@app/store/state.model';

// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer: Reducer<AppState> = combineReducers({
  todoList: TodoListReducers,
});
