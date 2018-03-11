import { Component, OnInit, Input } from '@angular/core';
import { TODOItem } from '../shared/models/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() public todoItem: TODOItem;

  constructor() { }

  ngOnInit() {
  }

}
