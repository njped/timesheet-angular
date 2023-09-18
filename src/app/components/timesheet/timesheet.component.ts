import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/interfaces/departments';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

  departments: Department[] | undefined
  department: Department | undefined
  employeeNameFC = new FormControl('')

  constructor(
    private route: ActivatedRoute,
    private departmentService: DepartmentsService,
  ) { }

  ngOnInit() {
    this.departments = this.departmentService.departments;
    this.department = this.departments.find(department => department.id === this.route.snapshot.params['id']);
    console.log(`Departments: ${this.departments}`)
    console.log(`Department: ${this.department}`)
}

}
