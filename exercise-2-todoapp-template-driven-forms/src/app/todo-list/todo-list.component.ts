import { TODOItem } from './../shared/models/todo-item';
import { TodoListService } from './../core/todo-list.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  currentTODO: TODOItem = new TODOItem('', '');

  constructor(private todoListService: TodoListService) { }

  get todoList() {
    return this.todoListService.todoList;
  }

  deleteTodo(title: string) {
    this.todoListService.todoList = this.todoListService.todoList.filter(todo => todo.title !== title);
  }

  editTodo(todoItem: TODOItem) {
    this.currentTODO = todoItem;
  }
}
