import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePortafolioComponent } from './home-portafolio/home-portafolio.component';
import { PortafolioSkillsComponent } from './portafolio-skills/portafolio-skills.component';
import { PortafolioProjectsComponent } from './portafolio-projects/portafolio-projects.component';
import { PortafolioContactComponent } from './portafolio-contact/portafolio-contact.component';
import { PortafolioBlogComponent } from './portafolio-blog/portafolio-blog.component';

const routes: Routes = [
  {
    path: '',
    component: HomePortafolioComponent,
  },
  {
    path: 'skills',
    component: PortafolioSkillsComponent,
  },
  {
    path: 'projects',
    component: PortafolioProjectsComponent,
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
