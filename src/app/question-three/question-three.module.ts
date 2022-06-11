import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { QuestionThreeComponent } from './question-three/question-three.component';
import { CommonModule } from '@angular/common';
import { QuestionThreeService } from './question-three/question-three.service';
import { AppComponent } from '../app.component';



const routes: Routes = [
  {
    path: '',
    component: QuestionThreeComponent,
  },
];

@NgModule({
  declarations: [
    QuestionThreeComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes),
    NgxEchartsModule.forRoot({
      echarts
    }),
    HttpClientModule,
    FormsModule],
    providers: [QuestionThreeService],
})

export class QuestionThreeModule {}
