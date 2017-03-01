import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent }         from './about.component';
import { DashboardComponent }     from './dashboard.component';
import { ContactComponent }       from './contact.component';
import { ProjectDetailComponent } from './project-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Carousel',
    pathMatch: 'full'
  },
  {
    path: 'Projecten',
    component: DashboardComponent
  },
  {
    path: 'OverDvM',
    component: AboutComponent
  },
  {
    path: 'Contact',
    component: ContactComponent
  },
  {
    path: 'Project/:id',
    component: ProjectDetailComponent
  }
];

@NgModule({
  imports:  [RouterModule.forRoot(routes)],
  exports:  [RouterModule]
})

export class AppRoutingModule {}
