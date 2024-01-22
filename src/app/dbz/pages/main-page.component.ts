import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
  public characters: Character[] = [{
    name: 'Goku',
    power: 15000
  },
  {
    name: 'Vegeta',
    power: 7500
  },
  {
    name: 'Trunks',
    power: 10000
  },
  {
    name: 'Krillin',
    power: 500
  }
  ];
}
