import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  static whenClicked() {
    console.log("clicked")
  }

  step:number;
  path:number;
  constructor() { }

  ngOnInit(): void {
    this.step = 0;
    this.path = 0;
  }
}

$(function(){
  $('#prompt-container').hide();
  $('#quiz-container').hide();

  $('#init-btn').on("click",function(){
    $(this).hide();
    $('#prompt-container').show();
    $('#quiz-container').show();

  })
})
