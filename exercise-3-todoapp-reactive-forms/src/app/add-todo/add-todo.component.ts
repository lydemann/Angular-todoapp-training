import { TodoListService } from './../core/todo-list.service';
import { Component, OnInit, Input } from '@angular/core';
import { TODOItem } from '../shared/models/todo-item';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  public form: FormGroup;
  public isSubmitted: boolean;
  private editingIndex = -1;
  public get currentTODO(): TODOItem {
    const formValue = this.form.value;
    const currentTODOClone = Object.assign({}, formValue);
    return currentTODOClone;
  }
  @Input() public set currentTODO(value: TODOItem) {
    this.form.patchValue(value);
    this.editingIndex = this.todoListService.todoList.findIndex(todo => todo.id === value.id);
  }

  constructor(private todoListService: TodoListService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      title: this.formBuilder.control('', Validators.required),
      description: this.formBuilder.control('', Validators.required),
      dueDate: this.formBuilder.control('', Validators.required),
    });
  }

  ngOnInit() {
  }

  save(form: FormGroup) {

    this.isSubmitted = true;
    if (!form.valid) {
      console.log('Invalid form!');
      // TODO: display form errors
      return;
    }

    const currentTODOClone = this.currentTODO;
    if (this.isEditing()) {
      this.todoListService.todoList[this.editingIndex] = currentTODOClone;
      this.setAdding();
    } else {
      this.todoListService.todoList.push(currentTODOClone);
      this.currentTODO = new TODOItem('', '');
    }
    this.isSubmitted = false;
    form.reset();
  }

  private setAdding() {
    this.editingIndex = -1;
  }

  private isEditing() {
    return this.editingIndex !== -1;
  }
}
