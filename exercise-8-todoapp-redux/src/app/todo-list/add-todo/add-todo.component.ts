import { TodoListActions } from '@app/core/todo-list/redux-api/todo-list.actions';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TODOItem } from '@app/shared/models/todo-item';
import { TodoListService } from '@app/core/todo-list/todo-list.service';
import { TodoListSelector } from '@app/core/todo-list/redux-api/todo-list.selector';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  private editingIndex = -1;
  todoList = [];

  private _currentTODO: TODOItem = new TODOItem('', '');
  public get currentTODO(): TODOItem {
    return this._currentTODO;
  }
  @Input()
  public set currentTODO(value: TODOItem) {
    this._currentTODO = Object.assign({}, value);
    this.editingIndex = this.todoList.findIndex(todo => todo.id === value.id);
  }

  constructor(
    private todoListSelector: TodoListSelector,
    private todoListActions: TodoListActions
  ) {
    this.todoListSelector.todoList$.subscribe(todoList => {
      this.todoList = todoList;
    });
  }

  ngOnInit() {}

  save(form: NgForm) {
    if (!form.valid) {
      console.log('Invalid form!');
      // TODO: display form errors
      return;
    }

    const currentTODOClone = Object.assign({}, this.currentTODO);
    if (this.isEditing()) {
      this.todoListActions.todoItemUpdated(currentTODOClone);
      this.setAdding();
    } else {
      this.todoListActions.todoItemCreated(currentTODOClone);
      this.currentTODO = new TODOItem('', '');
    }
    form.resetForm();
  }

  private setAdding() {
    this.editingIndex = -1;
  }

  private isEditing() {
    return this.editingIndex !== -1;
  }
}
