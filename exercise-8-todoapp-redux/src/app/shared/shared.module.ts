import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvalidDateValidatorDirective } from './invalid-date.directive';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InvalidDateValidatorDirective,
    TodoItemComponent
],
  exports: [InvalidDateValidatorDirective]
})
export class SharedModule { }
