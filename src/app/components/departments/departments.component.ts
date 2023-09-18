import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from 'src/app/services/departments.service';
import { Department } from 'src/app/interfaces/departments';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})

export class DepartmentsComponent implements OnInit {

  departments: Department[] | undefined
  
  constructor(
    private departmentService: DepartmentsService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.departments = this.departmentService.departments
  }
  goToDepartment(departmentId: string) {
    this.router.navigate(['./timesheet', {id: departmentId}]);
}
}
