import { Component } from '@angular/core';
import { faListCheck, faEyeLowVision, faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portafolio-projects',
  templateUrl: './portafolio-projects.component.html',
  styleUrls: ['./portafolio-projects.component.css']
})
export class PortafolioProjectsComponent  {

  public message: string = "Hola Mundo!"

  public faFileArchive = faListCheck;
  public faEyeLowVision = faEyeLowVision;
  public faLink = faLink;

}
