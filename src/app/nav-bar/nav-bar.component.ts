import {Component, Input, OnInit} from '@angular/core';
import {MainComponent} from '../main/main.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  @Input() main: MainComponent;

  constructor() { }

  ngOnInit() {

  }

  clickHome() {
    this.main.activateHome();
  }
  clickMenu1() {
    this.main.activateMenu1();
  }
  clickContact() {
    this.main.activateContact();
  }

}
