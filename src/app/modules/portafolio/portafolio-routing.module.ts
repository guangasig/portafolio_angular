import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioSkillsComponent } from './portafolio-skills/portafolio-skills.component';
import { PortafolioProjectsComponent } from './portafolio-projects/portafolio-projects.component';
import { PortafolioContactComponent } from './portafolio-contact/portafolio-contact.component';
import { PortafolioBlogComponent } from './portafolio-blog/portafolio-blog.component';
import { PortafolioHomeComponent } from './portafolio-home/portafolio-home.component';

const routes: Routes = [
  {
    path: '',
    component: PortafolioHomeComponent,
  },
  {
    path: 'skills',
    component: PortafolioSkillsComponent,
    data: { animation: 'skills' }
  },
  {
    path: 'projects',
    component: PortafolioProjectsComponent,
    data: { animation: 'projects' }
  },
  {
    path: 'contact',
    component: PortafolioContactComponent,
  },
  {
    path: 'blog',
    component: PortafolioBlogComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})

export class PortafolioRoutingModule { }
