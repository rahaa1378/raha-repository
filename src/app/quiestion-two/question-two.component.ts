import { Component, OnInit } from '@angular/core';
import { delay, forkJoin, of } from 'rxjs';

@Component({
  selector: 'app-question-two',
  templateUrl: './question-two.component.html',
  styleUrls: ['./question-two.component.scss'],
})
export class QuestionTwoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const serverReq = forkJoin({
      source1: of([1, 2, 3]),
      source2: of([1, 2, 3]).pipe(delay(100)),
      source3: of([1, 2, 3]).pipe(delay(1200)),
      source4: of([1, 2, 3]).pipe(delay(2300)),
      source5: of([1, 2, 3]).pipe(delay(3400)),
      source6: of([1, 2, 3]).pipe(delay(4500)),
      source7: of([1, 2, 3]).pipe(delay(5600)),
      source8: of([1, 2, 3]).pipe(delay(6700)),
      source9: of([1, 2, 3]).pipe(delay(7800)),
      source10: of([1, 2, 3]).pipe(delay(8900)),
    });

    serverReq.subscribe((res) => console.log(res));
  }
}
