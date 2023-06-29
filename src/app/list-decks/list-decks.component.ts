import { DeckService } from './../service/deck.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Deck } from '../model/deck';
import { Shared } from '../util/shared';
import { ActivatedRoute, Router } from '@angular/router';
import { DeckServicePromice } from '../service/deck.service.promice';

@Component({
  selector: 'app-list-decks',
  templateUrl: './list-decks.component.html',
  styleUrls: ['./list-decks.component.css']
})
export class ListDecksComponent implements OnInit {

  competitive: boolean =true;
  casual: boolean = true;
  semi: boolean = true;
  delete: boolean = false;
  decks?: Deck[];
  constructor(private deckService: DeckService,private route: ActivatedRoute ,private router: Router, private deckServicePromice: DeckServicePromice){  }

  ngOnInit(){
    this.route.queryParams.subscribe(
      (param)=>{
        if (param['tipo'] == 'competitivo') {
          this.competitive = true;
          this.casual = false;
        } else {
          if (param['tipo'] == 'casual') {
            this.competitive = false;
            this.casual = true;
          } else {
            this.competitive = true;
            this.casual = true;
          }
        }
      }
    );
    Shared.initializeWebStorage();
    this.deckServicePromice.getAll().then((value)=>{
      this.decks = value;
      this.filterDecks(this.competitive,this.semi,this.casual);
    }).catch(()=>{

      this.decks = this.deckService.returnAll();
    });
  }

  onClick(d: Deck){
    this.router.navigate(['adicionar'],{queryParams: {id: d.id}});

  }

  showCards(d: Deck){
    if(this.delete){
      this.delete = false;
    }
    else{
      this.router.navigate([`listar/cartas/${d.id}`]);
    }
  }

  onDelete(d: Deck){
    /* this.deckService.delete(d);
    this.decks = this.deckService.returnAll(); */
    this.delete = true;
    this.deckServicePromice.delete(d);
    this.deckServicePromice.getAll().then((value)=>{
      this.decks = value;this.ngOnInit();
    }).catch(()=>{

      this.decks = this.deckService.returnAll();
    }).finally(()=>{
      //this.router.navigate(['inicio']);
      //window.location.reload();//location.reload();
    });

  }

  filterDecks(comp: boolean, sem: boolean ,cas: boolean){
    this.decks = this.decks?.filter(
      (d)=>(comp && d.type === 'Competitivo')||(cas && d.type === 'Casual')||(sem && d.type === 'Semi-Competitivo')
    );
  }

  checkBoxClick(event: any, value: string){
    if (value == 'Competitivo') {
      this.competitive = event.target.checked ? true : false;
    } else {
      if (value == 'Casual') {
        this.casual = event.target.checked ? true : false;
      } else {
        if (value == 'Semi') {
          this.semi = event.target.checked ? true : false;
        }
      }
    }
    //this.filterDecks(this.competitive,this.casual);
    this.deckServicePromice.getAll().then((value)=>{
      this.decks = value;
      this.filterDecks(this.competitive,this.semi,this.casual);
    });
  }
}
