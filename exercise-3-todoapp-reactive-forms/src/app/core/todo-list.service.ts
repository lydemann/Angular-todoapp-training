import { Injectable } from '@angular/core';
import { TODOItem } from '../shared/models/todo-item';

@Injectable()
export class TodoListService {

    public todoList: TODOItem[] = [
        new TODOItem('Buy Milk', 'Remember to buy milk'),
        new TODOItem('Go to the gym', 'Remember to work out')
    ];

    constructor() { }
}
