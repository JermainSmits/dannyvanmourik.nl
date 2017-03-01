import { Component, OnInit } from '@angular/core';

import { Project }         from './project';
import { ProjectService }  from './project.service';

@Component({
  moduleId: module.id,
  selector: 'dvm-dashboard',
  templateUrl: '../html/dashboard.html',
  styleUrls: [ '../css/dashboard.css' ]
})

export class DashboardComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().then(projects => this.projects = projects.slice(0,3));
  }
}
