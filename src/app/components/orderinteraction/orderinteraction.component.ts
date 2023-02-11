import { Component } from '@angular/core';

@Component({
  selector: 'app-orderinteraction',
  templateUrl: './orderinteraction.component.html',
  styleUrls: ['./orderinteraction.component.css']
})
export class OrderinteractionComponent {
  Condition1: boolean = true;
  autosave: boolean = true;
  bottomSymbol:boolean=true;
  delete1=true;
  delete2=true;
  delete3=true;
  Condition2: boolean = false;
  Condition3: boolean = false;

  screen2(){
    this.Condition1=false;
    this.autosave=false;
    this.delete1=false;
    this.delete2=false;
    this.delete3=false;
    this.bottomSymbol=false;
    this.Condition2=true;
  }

  screen3(){
    this.Condition2=false;
    this.Condition3=true;
  }

  deleteicon1(){
    this.delete1=false;
  }

  deleteicon2(){
    this.delete2=false;
  }

  deleteicon3(){
    this.delete3=false;
  }

  dismiss(){
    this.bottomSymbol=false;
  }

  dismissbox(){
    this.Condition1=false;
    this.autosave=false;
  }
}
