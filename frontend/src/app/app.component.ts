import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
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
  constructor(private http: HttpClient) { }
  title = 'frontend';

  class= "";
  q1answer = "";
  q2answer = "";
  q3answer = "";
  qansList: String[] = []
  myObj;
  


  questionAnswers: QuestionAnswer[] = [
    
    {value: 0, viewValue: 'No'},
    {value: 1, viewValue: 'Yes'}
   
  ];

  onClassify() {
    this.qansList = []
    this.qansList.push(this.q1answer);
    this.qansList.push(this.q2answer);
    this.qansList.push(this.q3answer);
    // { 'UserResults' : '[a,b,c]' }
    this.myObj = {"UserResults" : [this.qansList]}
    console.log(this.myObj)
    this.httpSend(this.myObj)
    

    // Here we send the list, qansList to the backend as a JSON
    
  }

  httpSend(data) {
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    headers.set('accept', "application/json")
    headers.set('Access-Control-Allow-Origin', '*');

    this.http.post("http://148.197.86.181:5000/api/dectree", data, {headers: headers}).subscribe(res => {
      this.class=res["Classification"]
    })
  }
}