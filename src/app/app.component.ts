import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'baralho-app';
  disable: boolean;
  baralho: String;
  constructor(){
    this.disable = false;
    this.baralho = '';
  }

  onClick(){
    alert(`Baralho Salvo!!
            Nome: ${this.baralho}`);
    this.disable = true;
  }

  clean(){
    this.baralho = '';
    this.disable = false;
  }
}
