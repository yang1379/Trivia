import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { TriviaTestComponent } from './trivia-test/trivia-test.component';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    component: DashboardComponent,
    children: []
  },
  
  {
    path: 'new_question',
    pathMatch:'full',
    component: AddQuestionComponent,
    children: []
  },

  {
    path: 'lets_play',
    // pathMatch:'full',
    component: TriviaTestComponent,
    children: []
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
