import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import 'rxjs/add/operator/switchMap';

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

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.projectService.getProject(+params['id']))
      .subscribe(project => this.project = project);
  }
}
