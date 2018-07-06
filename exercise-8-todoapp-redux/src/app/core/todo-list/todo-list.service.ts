import { TodoListActions } from './redux-api/todo-list.actions';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TODOItem } from '@app/shared/models/todo-item';

@Injectable()
export class TodoListService {

    private todoListUrl = '//localhost:8080/todo-list';

    constructor(httpClient: HttpClient, todoListActions: TodoListActions) {
         httpClient.get<Array<TODOItem>>(this.todoListUrl).subscribe(data => {

            todoListActions.todoItemsLoaded(data);
        });
    }
}
