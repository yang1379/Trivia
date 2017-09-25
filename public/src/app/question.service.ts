import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { QuestionData } from './question-data';

@Injectable()
export class QuestionService {

  questions: QuestionData[] = [];

  questionObserver = new BehaviorSubject(this.questions);

  constructor(private _router: Router,
              private _http: Http) { }

  addQuestion(questionDataInst: QuestionData) {
    console.log('QuestionService questionDataInst: ', questionDataInst);
    this._http.post(`/questions`, questionDataInst).subscribe((response) => {
      console.log(response.json());
      return true;
      // this.getQuestions();
    },
    (err) => {
      console.log(`error`);
      return false;
    });
  }

  getQuestions():QuestionData {
    console.log(`getQuestions()`);
    this._http.get(`/questions`)
      .subscribe((response) => {
        this.questions = response.json();
        this.questionObserver.next(this.questions);
      },
      (err) => {
        console.log(`error`);
      }
      );

      return;
    }


  playGame() {
    console.log("In Services playGame()");
    // this._http.get(`/lets_play`);
    this._http.get(`/lets_play`)
      .subscribe((response) => {
        console.log("success");
      },
      (err) => {
        console.log(`error`);
      }
      );

      return;
  }

}
