import { Component, OnInit } from '@angular/core';
import { employeeservices } from '../employeeservices';

@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.scss']
})
export class EmpdetailComponent implements OnInit {
  employee:any[];

  constructor(private _employeeservice:employeeservices ) { }

  ngOnInit() {
    this._employeeservice.getEmployeelist()
     .subscribe(data=>this.employee=data);
    
  }

}

