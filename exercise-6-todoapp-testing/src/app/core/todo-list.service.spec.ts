/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoListService } from './todo-list.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service: TodoList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], // TODO: mock httpClientModule
      providers: [TodoListService]
    });
  });

  it('should ...', inject([TodoListService], (service: TodoListService) => {
    expect(service).toBeTruthy();
  }));
});
