import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RP-todo-list';
  constructor(){
    // setTimeout(() => {
    //   this.title = "TODO List" 
    // }, 2000);
  }
}
