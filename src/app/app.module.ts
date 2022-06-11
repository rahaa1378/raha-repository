import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'question-one',
        },
        {
          path: 'question-one',
          loadChildren: () =>
            import('./quiestion-one/quiestion-one.module').then(
              (m) => m.QuiestionOneModule
            ),
        },

        {
          path: 'question-two',
          loadChildren: () =>
            import('./quiestion-two/quiestion-two.module').then(
              (m) => m.QuestionTwoModule
            ),
        },
        {
          path: 'question-three',
          loadChildren: () =>
            import('./question-three/question-three.module').then(
              (m) => m.QuestionThreeModule
            ),
        },
      ],
      { preloadingStrategy: PreloadAllModules }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
