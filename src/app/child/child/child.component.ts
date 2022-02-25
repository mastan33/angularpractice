import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() inputParam?:string;

  @Input() inputEmpNameArray:any;

  @Input() txtboxVal?:string;

  constructor() { }

  ngOnInit(): void {
    console.log("input param ::: " + this.inputParam)
    console.log("input Emp name array ::: " + this.inputEmpNameArray)
    console.log("input text box value ::: " + this.txtboxVal)
    const temp = this.txtboxVal;
  }

}
