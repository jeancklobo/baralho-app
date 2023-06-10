import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../model/card';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.css']
})
export class CardTableComponent {
  @Input() cartas!: Card[];
  @Output() alterationEvent = new EventEmitter<Card>();
  @Output() deletionEvent = new EventEmitter<Card>();

  onClick(c: Card){

    this.alterationEvent.emit(c);
  }

  onDeletion(c: Card){
    this.deletionEvent.emit(c);
  }
}
