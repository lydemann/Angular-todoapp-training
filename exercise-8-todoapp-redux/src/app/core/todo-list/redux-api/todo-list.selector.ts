import { Injectable } from '@angular/core';
import { AppState } from '@app/store/state.model';

export const todoListSelector = (appState: AppState) => appState.todoList;

@Injectable()
export class TodoListSelector {

    // TODO: setup todolist selectors
}
