import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FormControl } from '@angular/forms';
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

  class= "";
  q1answer = "";
  q2answer = "";
  q3answer = "";
  q1 = "Are you a logical person?";
  q2 = "";
  q3= "";
  qansList: String[] = []
  myObj;
  disabledq2 = new FormControl(true);
  disabledq3 = new FormControl(true);
  disabledButton = new FormControl(true)
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

    this.http.post("http://148.197.87.83:5000/api/dectree", data, {headers: headers}).subscribe(res => {
      this.class=res["Classification"]
    })
  }

  // Add function that runs on any change, 
  // Basically if statements that change the q1,2,3 variables

  onQ1Change(event:Event):void {
    if (this.q1answer == "1") {
      this.disabledq2 = new FormControl(false);
      this.q2 = "Would you consider yourself good at Maths?";
      this.q3 = "";
      this.q2answer = ""
      this.q3answer = ""
      this.disabledq3 = new FormControl(true);
      this.disabledButton = new FormControl(true)



    } else {
      this.disabledq2 = new FormControl(false);
      this.q2 = "Would you consider yourself good at Art?";
      this.q3 = "";
      this.q2answer = ""
      this.q3answer = ""
      this.disabledq3 = new FormControl(true);
      this.disabledButton = new FormControl(true)


    }
  }

  onQ2Change(event:Event):void {
    if (this.q1answer == "1") {
      if (this.q2answer == "1") {
        this.q3 = "Would you consider yourself good at Programming?"
        this.disabledq3 = new FormControl(false);
        this.q3answer = ""
        this.disabledButton = new FormControl(true)
      } else {
        this.q3 = "Would you consider yourself good at Binary Logic?"
        this.disabledq3 = new FormControl(false);
        this.q3answer = ""
        this.disabledButton = new FormControl(true)

      }
    } else {
      if (this.q2answer == "1") {
        this.q3 = "Would you consider yourself good at Graphical Design?"
        this.disabledq3 = new FormControl(false);
        this.q3answer = ""
        this.disabledButton = new FormControl(true)

      } else {
        this.q3 = "Would you consider yourself good at UI/UX Design?"
        this.disabledq3 = new FormControl(false);
        this.q3answer = ""
        this.disabledButton = new FormControl(true)
    }
    }
  }

  onQ3Change(event:Event):void {
    if (this.q1answer !== "" && this.q2answer !== "" && this.q3answer !== "") {
      this.disabledButton = new FormControl(false)   
    }
  }

}