import { Component, OnInit } from '@angular/core';
import { employeeservices } from '../employeeservices';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.scss']
})
export class EmplistComponent implements OnInit {
  employee:any[];
  constructor(private _employeeservice:employeeservices) { }

  ngOnInit() {
     this._employeeservice.getEmployeelist()
     .subscribe(data=>this.employee=data);

    
    
 
  }

}
 

