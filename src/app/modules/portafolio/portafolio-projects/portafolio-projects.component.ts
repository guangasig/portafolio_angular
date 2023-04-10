import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { PROJECTS_DATA } from '@data/constants/project.constants';
import { IProject } from '@data/interfaces/IProject';
import { faListCheck, faEyeLowVision, faLink } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Modal } from '@shared/components/modal/modal-bootstrap/modal-bootstrap';

@Component({
  selector: 'app-portafolio-projects',
  templateUrl: './portafolio-projects.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./portafolio-projects.component.css']
})
export class PortafolioProjectsComponent implements OnInit  {

  public faFileArchive = faListCheck;
  public faEyeLowVision = faEyeLowVision;
  public faLink = faLink;

  @ViewChild("modal") modal!: ElementRef;
  private modalM;
  public projects: IProject[] = PROJECTS_DATA;
  public project:IProject;

  constructor(private modalService:NgbModal){
    this.modalM = new Modal(this.modalService);
  }

  openModalProject(id:number) {
    const data = this.projects.filter(project => project.id === id)
    if(data.length > 0){
      this.project = data[0];
      // this.modalM.open(this.modal)
      this.modalService.open(this.modal, { centered: true, size: 'lg' });
    }
  }

  ngOnInit(): void {

  }
}
