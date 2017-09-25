import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _router: Router,) { }

  ngOnInit() {
  }

  playGame() {
    console.log("In AppComponent playGame()")
    // this._questionService.playGame();
    this._router.navigateByUrl(`lets_play`);
  }

}
