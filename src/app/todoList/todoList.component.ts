import { Component, OnInit } from '@angular/core';
import {todo} from "../core/todo";

@Component({
  selector: 'app-todoList',
  templateUrl: './todoList.component.html',
  styleUrls: ['./todoList.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() {
  }
todoList:todo[]=[]
  ngOnInit(): void {
    this.todoList = [
      {
        "userId": 1, "id": 1, "title": "delectus aut autem", "completed":
          false
      },
      {"userId": 1, "id": 2, "title": "quis ut nam facilis et officiaqui", "completed": false},
      {
        "userId": 1, "id": 3, "title": "fugiat veniam minus", "completed":
          false
      },
      {
        "userId": 1, "id": 4, "title": "quo adipisci enim quam ut ab",
        "completed": true
      }];
  }

}
