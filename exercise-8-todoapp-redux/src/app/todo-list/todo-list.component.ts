import { Component } from '@angular/core';
import { TodoListSelector } from '@app/core/todo-list/redux-api/todo-list.selector';
import { TodoListService } from '@app/core/todo-list/todo-list.service';
import { TODOItem } from '@app/shared/models/todo-item';
import { TodoListActions } from '@app/core/todo-list/redux-api/todo-list.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  currentTODO: TODOItem = new TODOItem('', '');

  constructor(
    private todoListService: TodoListService,
    private todoListSelector: TodoListSelector,
    private todoListActions: TodoListActions
  ) {
    todoListSelector.todoList$.subscribe(todoList => {
      this.todoList = todoList;
    });
  }

  todoList;

  deleteTodo(todoItem: TODOItem) {
    this.todoListActions.todoItemDeleted(todoItem);
  }

  editTodo(todoItem: TODOItem) {
    this.currentTODO = todoItem;
  }
}
