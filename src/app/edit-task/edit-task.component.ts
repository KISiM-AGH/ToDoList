import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Todo} from "../shared/todo.model";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit{

  showValidationErrors: boolean
  constructor(
    public dialogRef: MatDialogRef<EditTaskComponent>,
   @Inject(MAT_DIALOG_DATA) public todo: Todo) {}

  close(){
    this.dialogRef.close()
  }
  ngOnInit():void {
  }

  // @ts-ignore
  onFormSubmit(form: NgForm){
    if(form.invalid) return this.showValidationErrors = true
    if(form.invalid) return
    const updatedTodo = {
      ...this.todo,
      ...form.value
    }
    this.showValidationErrors = false
    this.dialogRef.close(updatedTodo)
  }
}
