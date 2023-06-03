import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.css']
})
export class CardTableComponent {
  @Input() cartas!: String[];
  @Output() alterationEvent = new EventEmitter<Number>();

  onClick(){

    this.alterationEvent.emit(1);
  }
}
