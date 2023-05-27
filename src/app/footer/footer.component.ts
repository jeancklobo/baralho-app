import { Component } from '@angular/core';
import * as M from "materialize-css";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  year!: number;
  constructor(){
    this.year = new Date().getFullYear();
  }
}
