import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { QuestionService } from './question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addedQuestion = '';

  constructor(private _router: Router,
              private _questionService: QuestionService) {

  }

  dataFromChild(eventData){
    console.log(`dataFromChild() eventData: ${eventData}`);
    this.addedQuestion = eventData;
  }

}
