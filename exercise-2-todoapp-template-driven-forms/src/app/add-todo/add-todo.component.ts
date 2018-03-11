import { TodoListService } from './../core/todo-list.service';
import { Component, OnInit } from '@angular/core';
import { TODOItem } from '../shared/models/todo-item';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  currentTODO: TODOItem = new TODOItem('', '');

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
  }

  save(form: NgForm) {

    if (!form.valid) {
      console.log('Invalid form!');
      // TODO: display form errors
      return;
    }

    this.todoListService.todoList.push(this.currentTODO);
    this.currentTODO = new TODOItem('', '');
    form.resetForm();
  }
}
