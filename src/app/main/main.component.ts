import { Component, OnInit } from '@angular/core';
import {HomeComponent} from '../home/home.component';
import {AboutComponent} from '../about/about.component';
import {MenuOneComponent} from '../menu-one/menu-one.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  active: any;

  constructor() { }

  ngOnInit() {
    this.active = HomeComponent;
  }


  activateHome() {
    
    this.active = HomeComponent;
  }

  activateMenu1() {
    this.active = MenuOneComponent;
  }

  activateContact() {
    this.active = AboutComponent;
  }
}
