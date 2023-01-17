import { Injectable } from '@angular/core';
import { Todo } from './todo.model'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  todos: Todo[] = [
    new Todo('test'),
    new Todo('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n')
  ]
  constructor() {

  }

  getAllTodos(){
    return this.todos
  }

  addTodo(todo: Todo){
    this.todos.push(todo)
  }

  updateTodo(index: number, updatedTodo: Todo){
    this.todos[index] = updatedTodo
  }

  deleteTodo(index: number){
    this.todos.splice(index, 1)
  }
}
