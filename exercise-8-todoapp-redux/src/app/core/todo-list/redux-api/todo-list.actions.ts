import { Injectable } from '@angular/core';
import { TODOItem } from '@app/shared/models/todo-item';
import { GenericAction } from '@app/store/generic-action';

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

    public todoItemCreated(todoItem: TODOItem): GenericAction<TodoListActionTypes, TODOItem> {
        return new GenericAction(TodoListActionTypes.TodoItemCreated, todoItem);
    }

    public todoItemDeleted(todoItem: TODOItem): GenericAction<TodoListActionTypes, TODOItem> {
        return new GenericAction(TodoListActionTypes.TodoItemDeleted, todoItem);
    }
    public todoItemUpdated(todoItem: TODOItem): GenericAction<TodoListActionTypes, TODOItem> {
        return new GenericAction(TodoListActionTypes.TodoItemUpdated, todoItem);
    }
    public todoItemCompleted(todoItem: TODOItem): GenericAction<TodoListActionTypes, TODOItem> {
        return new GenericAction(TodoListActionTypes.TodoItemCompleted, todoItem);
    }
}
