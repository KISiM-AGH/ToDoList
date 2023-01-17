import {Component, OnInit} from '@angular/core';
import {Todo} from "../shared/todo.model";
import {DataService} from "../shared/data.service";
import {NgForm} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {EditTaskComponent} from "../edit-task/edit-task.component";

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit{
  todos: Todo[]
  showValidationErrors: boolean

  constructor(private dataService: DataService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos()
  }

  // @ts-ignore
  onFormSubmit(form: NgForm){
    if(form.invalid) return this.showValidationErrors = true
    this.dataService.addTodo(new Todo(form.value.text))

    this.showValidationErrors = false
    form.reset()
  }

  setComplete(todo:Todo){
    todo.completed = !todo.completed;
  }

  editTodo(todo:Todo){
    const index = this.todos.indexOf(todo)
    let dialogRef = this.dialog.open(EditTaskComponent, {
      width: '600px',
      data: todo
    });

    dialogRef.afterClosed()
      .subscribe((result)=>{
        if(result){
          this.dataService.updateTodo(index, result)
        }
      })
  }

  deleteTodo(todo: Todo){
    const index = this.todos.indexOf(todo)
    this.dataService.deleteTodo(index)
  }
}
