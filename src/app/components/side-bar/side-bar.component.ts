import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  expanded: boolean = true;
  opened: boolean = false;
  expandedSideBar: any;
  commonIntrxn: boolean = false;
  inlineIntrxn: boolean = false;
  graphicIntrxn: boolean = false;
  customIntrxn: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  menu() {
    this.opened = !this.opened;
    const expanded = document.querySelector('.expanded');

    if (this.opened) {
      this.expandedSideBar = {
        translate: '110%',
        transitionDuration: '600ms',

        // display: 'block',
      };
    } else {
      this.expandedSideBar = {
        translate: '-80%',
        transitionDuration: '600ms',
      };
      // setTimeout(() => {
      //   this.expanded = !expanded;
      // }, 800);
    }
  }

  openCommonInteraction() {
    console.log('Hello');
    const interactions = document.querySelector('#commonInteraction');
    // const childs = document.createElement('p');
    // childs.innerText = 'Hello';
    // interactions?.appendChild(childs);

    this.commonIntrxn = !this.commonIntrxn;
    this.inlineIntrxn = false;
    this.graphicIntrxn = false;
    this.customIntrxn = false;
  }
}
