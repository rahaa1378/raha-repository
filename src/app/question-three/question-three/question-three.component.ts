import { Component, OnInit } from '@angular/core';
import { CountryStatus, Country } from './models';
import { tap } from 'rxjs/operators';
import { QuestionThreeService } from './question-three.service';
@Component({
  selector: 'question-three-root',
  templateUrl: './question-three.component.html',
  styleUrls: ['./question-three.component.scss']
})
export class QuestionThreeComponent {
  selectedCountry: string="";
  countryCasesChartOptions: any;
  cases: CountryStatus[] = [];

  countries$ = this.service.getCountries$.pipe(tap(countries => {
    this.selectedCountry = countries[0].Slug;
    this.setOptions();
  }));


  constructor(private service: QuestionThreeService) {

  }


  onChangeCountry() {
    this.service.getCasesByCountry(this.selectedCountry).subscribe(cases => {
      this.cases = cases;
      this.setOptions();
    });
  }

  setOptions() {
    this.countryCasesChartOptions = {

      title: {
        text: 'چارت ویروس کووید',
      },
      legend: {
        data: ['Confirmed', 'Recovered', 'Deaths']
      },
      tooltip: {

      },
      xAxis: {
        data: this.cases.map(c => new Date(c.Date).toLocaleDateString()),
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: 'تایید شده',
        type: 'line',
        data: this.cases.map(c => c.Confirmed),
      },
      {
        name: 'بهبود یافته',
        type: 'line',
        data: this.cases.map(c => c.Recovered),
      },
      {
        name: 'مرگ و میر',
        type: 'line',
        data: this.cases.map(c => c.Deaths),
      },

      ]
    };

  }

}
