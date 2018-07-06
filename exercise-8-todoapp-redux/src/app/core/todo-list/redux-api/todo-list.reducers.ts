import { TodoListState } from '@app/core/todo-list/redux-api/todo-list.state';
import { TodoListActionTypes } from '@app/core/todo-list/redux-api/todo-list.actions';
import { GenericAction } from '@app/store/generic-action';
import { TODOItem } from '@app/shared/models/todo-item';

const todoItemCreatedReducer = (
  lastState: TodoListState,
  action: GenericAction<TodoListActionTypes, TODOItem>
): TodoListState => {
  const prevTodos = lastState.todos;
  prevTodos.push(action.payload);
  const newTodos = prevTodos;
  return {
    ...lastState,
    todos: newTodos
  };
};
const todoItemDeletedReducer = (
  lastState: TodoListState,
  action: GenericAction<TodoListActionTypes, string>
) => {
  return { ...lastState };
};
const todoItemUpdatedReducer = (
  lastState: TodoListState,
  action: GenericAction<TodoListActionTypes, TODOItem>
) => {
  return { ...lastState };
};
const todoItemCompletedReducer = (
  lastState: TodoListState,
  action: GenericAction<TodoListActionTypes, string>
) => {
  return { ...lastState };
};

export const TodoListReducers = (
  lastState: TodoListState = new TodoListState(),
  action: GenericAction<TodoListActionTypes, any>
): TodoListState => {
  switch (action.type) {
    case TodoListActionTypes.TodoItemCreated:
      return todoItemCreatedReducer(lastState, action);
    case TodoListActionTypes.TodoItemDeleted:
      return todoItemDeletedReducer(lastState, action);
    case TodoListActionTypes.TodoItemUpdated:
      return todoItemUpdatedReducer(lastState, action);
    case TodoListActionTypes.TodoItemCompleted:
      return todoItemCompletedReducer(lastState, action);

    default:
      return {
        ...lastState
      };
  }
};
