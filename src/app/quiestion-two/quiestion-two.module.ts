import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionTwoComponent } from './question-two.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: QuestionTwoComponent,
  },
];

@NgModule({
  declarations: [
    QuestionTwoComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class QuestionTwoModule {}
