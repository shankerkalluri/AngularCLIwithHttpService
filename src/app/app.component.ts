import { Component, OnInit } from '@angular/core';
import {DataService} from './data.service';
import {Observable} from 'rxjs/Rx';
import {Task} from './task';

@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  title = 'Tasks';
  tasks: Task[];
  errorMessage : any[];
  
  constructor(private dataService:DataService){}
  
  ngOnInit(){
    
    this.dataService.getTasks().subscribe(
    
        tasks => {this.tasks = tasks; console.log(this.tasks)}, //tasks is parameter
        error => {this.errorMessage = <any>error} //error is parameter 
    
    )
    
  }
    
}
