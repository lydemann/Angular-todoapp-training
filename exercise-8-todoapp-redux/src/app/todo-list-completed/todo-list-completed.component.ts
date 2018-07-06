import { TodoListSelector } from '@app/core/todo-list/redux-api/todo-list.selector';
import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../core/todo-list/todo-list.service';

@Component({
  selector: 'app-todo-list-completed',
  templateUrl: './todo-list-completed.component.html',
  styleUrls: ['./todo-list-completed.component.css']
})
export class TodoListCompletedComponent {

  constructor(private todoListService: TodoListService, public todoListSelector: TodoListSelector) { }

}
