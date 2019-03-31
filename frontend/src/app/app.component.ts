import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

export interface QuestionAnswer {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  
  title = 'frontend';

  class= "";
  q1answer = "";
  q2answer = "";
  q3answer = "";
  qansList: String[] = []
  


  questionAnswers: QuestionAnswer[] = [
    
    {value: 0, viewValue: 'No'},
    {value: 1, viewValue: 'Yes'}
   
  ];

  onClassify() {
    this.qansList = []
    this.qansList.push(this.q1answer);
    this.qansList.push(this.q2answer);
    this.qansList.push(this.q3answer);
    this.class = this.qansList.toString();

    // Here we send the list, qansList to the backend as a JSON
    
  }
}
