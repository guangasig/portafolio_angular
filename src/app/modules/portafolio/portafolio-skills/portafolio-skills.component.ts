import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SkillsService } from '@data/services/api/skills/skills.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Tag } from 'ng-tagcanvas';
import { Modal } from '@shared/components/modal/modal-bootstrap/modal-bootstrap';
import { faLink, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portafolio-skills',
  templateUrl: './portafolio-skills.component.html',
  styleUrls: ['./portafolio-skills.component.css']
})
export class PortafolioSkillsComponent implements OnInit{

  @ViewChild("modal") modal!: ElementRef;
  @ViewChild("skills") canvas!: ElementRef;
  private modalM;
  public titleModal:string = 'Modal';
  public contentModal:string = 'Description';
  public title = 'angularTests';
  public list = ['El desarrollo de aplicaciones web', 'Y la docencia']

  faLink = faLink;
  faUser = faUser;
  closeResult = '';
  tags: Tag[] = [];
  options: TagCanvasOptions = {
    freezeActive: false,
    freezeDecel: false,
    pinchZoom:false,
    animTiming:"Smooth",
    shadowOffset: [0,0],
    radiusX:1,
    radiusY:1,
    radiusZ:1,
    activeCursor: 'pointer',
    initial: [0.2,-0.2],
    textHeight: 24
  }
	
  constructor(private skillsService:SkillsService, private modalService: NgbModal) {
    
    this.skillsService.getSkills().subscribe(response =>{
      if(!response.error){
        this.tags = response.data ? response.data : [];
      }else{
        this.tags = [];
      }
    })

    this.modalM = new Modal(this.modalService);
  }

  tagClicked(tag:any) {
    console.log(tag);
    this.titleModal = tag ? tag.text : '';
    this.contentModal = tag ? tag.descripcion : '';
    this.modalM.open(this.modal)
  }


  ngOnInit(): void {

  }
}
