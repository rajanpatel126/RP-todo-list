import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  title:string="";
  desc:string="";

  onSubmit(){
    const todo={
      sno: 5,
      title: this.title,
      desc: this.desc,
      active:true
    }    
    this.todoAdd.emit(todo)
    this.title=""
    this.desc=""
  }
}
