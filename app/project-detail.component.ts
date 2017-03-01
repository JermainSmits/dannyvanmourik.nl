import { Component, Input, OnInit } from '@angular/core';

import { Project }          from './project';
import { ProjectService }   from './project.service';

@Component({
  moduleId: module.id,
  selector: 'project-detail',
  templateUrl: '../html/project-detail.html',
  styleUrls: ['../css/project-detail.css']
})

export class ProjectDetailComponent implements OnInit {
  project: Project;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProject(2).then(project => this.project = project);
  }
}
