import { Component, OnInit } from '@angular/core';
import { TODOItem } from '../todo-item/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  todoList: TODOItem[] = [
    new TODOItem('Buy Milk', 'Remember to buy milk'),
    new TODOItem('Go to the gym', 'Remember to work out')
  ];

  constructor() { }

  ngOnInit() {
  }

}
