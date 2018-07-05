import { TodoListState } from '@app/core/todo-list/redux-api/todo-list.state';
import { TodoListActionTypes } from '@app/core/todo-list/redux-api/todo-list.actions';
import { GenericAction } from '@app/store/generic-action';
import { TODOItem } from '@app/shared/models/todo-item';

const todoItemCreatedReducer = (lastState: TodoListState, action: GenericAction<TodoListActionTypes, TODOItem>): TodoListState => {

    const prevTodos = lastState.todos;
    prevTodos.push(action.payload);
    const newTodos = prevTodos;
    return {
        todos: newTodos
    };
};
const todoItemDeletedReducer = (lastState: TodoListState, action: GenericAction<TodoListActionTypes, string>) => {

};
const todoItemUpdatedReducer = (lastState: TodoListState, action: GenericAction<TodoListActionTypes, TODOItem>) => {

};
const todoItemCompletedReducer = (lastState: TodoListState, action: GenericAction<TodoListActionTypes, string>) => {

};

export const TodoListReducers = (lastState: TodoListState, action: GenericAction<TodoListActionTypes, any>) => {

};
