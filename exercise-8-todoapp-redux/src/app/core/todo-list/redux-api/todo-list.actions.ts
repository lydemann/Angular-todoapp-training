import { Injectable } from '@angular/core';
import { TODOItem } from '@app/shared/models/todo-item';
import { GenericAction } from '@app/store/generic-action';
import { dispatch } from '@angular-redux/store';

export enum TodoListActionTypes {
    TodoItemCreated = 'TodoItemCreated',
    TodoItemDeleted = 'TodoItemDeleted',
    TodoItemUpdated = 'TodoItemUpdated',
    TodoItemCompleted = 'TodoItemCompleted',
}

@Injectable()
export class TodoListActions {
    constructor() {
    }

    @dispatch()
    public todoItemCreated(todoItem: TODOItem): GenericAction<TodoListActionTypes, TODOItem> {
        return new GenericAction(TodoListActionTypes.TodoItemCreated, todoItem);
    }

    @dispatch()
    public todoItemDeleted(todoItem: TODOItem): GenericAction<TodoListActionTypes, TODOItem> {
        return new GenericAction(TodoListActionTypes.TodoItemDeleted, todoItem);
    }

    @dispatch()
    public todoItemUpdated(todoItem: TODOItem): GenericAction<TodoListActionTypes, TODOItem> {
        return new GenericAction(TodoListActionTypes.TodoItemUpdated, todoItem);
    }

    @dispatch()
    public todoItemCompleted(todoItem: TODOItem): GenericAction<TodoListActionTypes, TODOItem> {
        return new GenericAction(TodoListActionTypes.TodoItemCompleted, todoItem);
    }
}
