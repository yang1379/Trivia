import { Component, OnInit } from '@angular/core';

import { QuestionData } from '../question-data';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-trivia-test',
  templateUrl: './trivia-test.component.html',
  styleUrls: ['./trivia-test.component.css']
})
export class TriviaTestComponent implements OnInit {

  questionDataInst: QuestionData[] = [];

  constructor(private _questionService: QuestionService) {

    this._questionService.questionObserver.subscribe(
      (questionDataInst)=>{
        this.questionDataInst = questionDataInst;
      });

      _questionService.getQuestions();
   }

  ngOnInit() {
  }

}
