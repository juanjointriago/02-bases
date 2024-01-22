import { Injectable } from '@angular/core';
import { Character } from '../dbz/interfaces/character.interface';
import {v4 as uuid} from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  characters: Character[] = [{
    id: uuid(),
    name: 'Goku',
    power: 15000
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  },
  {
    id: uuid(),
    name: 'Trunks',
    power: 10000
  },
  {
    id: uuid(),
    name: 'Krillin',
    power: 500
  }
  ];

  onAddCharacter(character: Character): void {
    const newCharacter = {...character, id: uuid()}
    this.characters.push(newCharacter);
  }
  onDeleCharacterById(uuid: string): void {
    this.characters = this.characters.filter((item)=> item.id === uuid);
  }
  constructor() { }
}
