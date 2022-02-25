import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InputExample';

  inputVal:string = '';

  /** 
   * Passing string from parent/root component to child component
   */
  
  strValueFromParentComp = "Mastan";
  /** 
   * Passing array from parent/root component to child component
   */
  empNamesArray = ["Abubakar", "Umar", "Usman", "Ali"];

passDatatoChildComponent(inputTxtboxVal: any) {

this.inputVal = inputTxtboxVal
}

}
