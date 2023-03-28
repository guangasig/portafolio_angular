import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { HomePortafolioComponent } from './home-portafolio/home-portafolio.component';
import { TagCanvasModule } from 'ng-tagcanvas';
import { SharedModule } from '@shared/shared.module';
import { PortafolioSkillsComponent } from './portafolio-skills/portafolio-skills.component';
import { PortafolioProjectsComponent } from './portafolio-projects/portafolio-projects.component';
import { PortafolioContactComponent } from './portafolio-contact/portafolio-contact.component';
import { PortafolioBlogComponent } from './portafolio-blog/portafolio-blog.component';

@NgModule({
  declarations: [
    HomePortafolioComponent,
    PortafolioSkillsComponent,
    PortafolioProjectsComponent,
    PortafolioContactComponent,
    PortafolioBlogComponent
  ],
  imports: [
    FormsModule,
    SharedModule,
    PortafolioRoutingModule,
    AngularTypewriterEffectModule,
    TagCanvasModule,
  ]
})

export class PortafolioModule { }
