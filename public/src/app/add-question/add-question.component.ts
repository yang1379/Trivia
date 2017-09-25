import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { QuestionData } from '../question-data';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  // 1 Create an Event in the TaskComponent
  @Output() aTaskEventEmitter = new EventEmitter();

  questionDataInst = new QuestionData();

  constructor(private _router: Router,
              private _questionService: QuestionService
             ) { }

  ngOnInit() {
  }

  addQuestion() {
    console.log('AddQuestionComponent this.questionDataInst: ', this.questionDataInst);
    this._questionService.addQuestion(this.questionDataInst);
    this.questionDataInst = new QuestionData();
    this.aTaskEventEmitter.emit(`Susscessfully added question`);
    this._router.navigateByUrl('');
  }

  cancel() {
    this._router.navigateByUrl(``);
  }
}
