import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from 'src/app/services/departments.service';
import { Department } from 'src/app/interfaces/departments';
import { MaterialModule } from 'src/app/modules/material/material.module';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})

export class DepartmentsComponent implements OnInit {

  departments: Department[] | undefined
  
  constructor(private departmentService: DepartmentsService) { }

  ngOnInit() {
    this.departments = this.departmentService.departments
  }

}
