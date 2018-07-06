import { TodoListService } from './todo-list/todo-list.service';
import { NgModule } from '@angular/core';
import { TodoListSelector } from '@app/core/todo-list/redux-api/todo-list.selector';
import { TodoListActions } from '@app/core/todo-list/redux-api/todo-list.actions';

@NgModule({
  imports: [
  ],
  declarations: [],
  providers: [TodoListService, TodoListSelector, TodoListActions]
})
export class CoreModule { }
