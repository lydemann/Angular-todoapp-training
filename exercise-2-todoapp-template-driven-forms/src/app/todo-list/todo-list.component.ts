import { TodoListService } from './../core/todo-list.service';
import { Component, OnInit } from '@angular/core';
import { TODOItem } from '../shared/models/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoListService: TodoListService) { }

  get todoList() {
    return this.todoListService.todoList;
  }

  ngOnInit() {
  }

}
