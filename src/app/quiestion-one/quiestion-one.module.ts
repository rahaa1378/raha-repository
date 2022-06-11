import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableComponent } from './components/reusable/reusable.component';
import { FirstStateComponent } from './components/first-state/first-state.component';
import { SecondStateComponent } from './components/second-state/second-state.component';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './components/wrapper/wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
  },
];

@NgModule({
  declarations: [
    ReusableComponent,
    FirstStateComponent,
    SecondStateComponent,
    WrapperComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class QuiestionOneModule {}
