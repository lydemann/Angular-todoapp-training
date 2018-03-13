/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodoListCompletedComponent } from './todo-list-completed.component';
import { AppModule } from '../app.module';
import { AppComponent } from '../app.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { FooterComponent } from '../footer/footer.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { appRouterModule, completedTodoPath } from '../app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { TodoListService } from '../core/todo-list.service';
import { TODOItem } from '../shared/models/todo-item';

describe('TodoListCompletedComponent', () => {
  let component: TodoListCompletedComponent;
  let fixture: ComponentFixture<TodoListCompletedComponent>;

  beforeEach(async(() => {

    const todo1 = new TODOItem('Buy milk', 'Remember to buy milk');
    todo1.completed = true;
    const todoList = [
      todo1,
      new TODOItem('Buy flowers', 'Remember to buy flowers'),
    ];

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        TodoListComponent,
        TodoItemComponent,
        FooterComponent,
        AddTodoComponent,
        TodoListCompletedComponent,
    ],
      imports: [
        BrowserModule,
        NgbModule.forRoot(),
        FormsModule,
        appRouterModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : completedTodoPath },
        {
          provide: TodoListService,
          useValue: {
            todoList: todoList
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have one completed TODO item', () => {
    expect(component.todoList.length).toBe(1);
  });
});
