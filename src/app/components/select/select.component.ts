import { Component, Input, OnInit } from '@angular/core';
import Question from 'src/app/models/question';
import Quiz from 'src/app/models/quiz';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() path:number;
  
  step:number;
  cookQuiz:Quiz;
  orderQuiz:Quiz;

  constructor() {}

  ngOnInit(): void {
  }

}
