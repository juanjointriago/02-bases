import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1>Hola counter</h1>
  <p>{{counter}}</p>
  <button (click)="updateCounter(1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="updateCounter(-1)">-1</button>
  `,
})

export class CounterComponent implements OnInit {
  public counter: number = 10;

  public updateCounter(value: number): void {
    this.counter += value;
  }
  public resetCounter(): void {
    this.counter = 10;
  }
  constructor() { }

  ngOnInit() { }
}
