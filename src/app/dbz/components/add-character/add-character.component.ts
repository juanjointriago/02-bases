import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  onNewCharacter :EventEmitter<Character> = new EventEmitter();


  public character: Character = {
    id:'',
    name: '',
    power: 0
  }

  resetForm() {
    this.character = {id:'', name: '', power: 0 };
  }
  emitCharacter(): void {
    if(this.character.name.length === 0) return;
    // this.onNewCharacter.emit({...this.character});//por referencia un nuevo objeto
    this.onNewCharacter.emit(this.character);

    this.resetForm();
  }
}
