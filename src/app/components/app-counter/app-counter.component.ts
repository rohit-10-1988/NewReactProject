import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './app-counter.component.html',
  styleUrls: ['./app-counter.component.css']
})
export class AppCounterComponent implements OnInit {
count: number;
  constructor() { }

  ngOnInit() {
    this.count = 0;

  }

  increment(){
    this.count++;
  }

  decrement(){
    this.count--;
  }

}
