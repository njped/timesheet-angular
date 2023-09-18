import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from 'src/app/services/departments.service';
import { Department } from 'src/app/interfaces/departments';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})

export class DepartmentsComponent implements OnInit {

  // departments: Department[] | undefined
  $departments: Observable<Department[]> | undefined;
  
  
  constructor(
    private departmentsService: DepartmentsService,
    private router: Router,
    ) { }

  ngOnInit() {
  //   this.departmentsService.getDepartments().subscribe(departments => {
  //     this.departments = departments;
  // });

  this.$departments = this.departmentsService.getDepartments();
  
  }

  goToDepartment(departmentId: string) {
    this.router.navigate(['./timesheet', {id: departmentId}]);
}
}
