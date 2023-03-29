import { DOCUMENT } from '@angular/common';
import { Component, ViewChild, ElementRef, Inject, OnInit } from '@angular/core';
import { SkillsService } from '@data/services/api/skills/skills.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Tag } from 'ng-tagcanvas';
import { Modal } from '@shared/components/modal/modal-bootstrap/modal-bootstrap';
import { faLink, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-portafolio',
  templateUrl: './home-portafolio.component.html',
  styleUrls: ['./home-portafolio.component.css']
})

export class HomePortafolioComponent implements OnInit {

    @ViewChild("modal") modal!: ElementRef;
    @ViewChild("skills") canvas!: ElementRef;

    faLink = faLink;
    faUser = faUser;

    private modalM;
    public titleModal:string = 'Modal';
    public contentModal:string = 'Description';
    public title = 'angularTests';
    public list = ['El desarrollo de aplicaciones web', 'Y la docencia']

    ngAfterViewInit() {
      let x = this.canvas;
      let y = x.nativeElement;
        console.log(x, y);
    }

    getData() {
        console.log(this.canvas);
        // this.skills.nativeElement.innerHTML = "I am changed by ElementRef & ViewChild";
    }

	  tags: Tag[] = [];
	
    options: TagCanvasOptions = {
      // freezeActive: false,
      // freezeDecel: false,
      pinchZoom:false,
      animTiming:"Smooth",
      shadowOffset: [0,0],
      radiusX:1,
      radiusY:1,
      radiusZ:1,
      activeCursor: 'pointer',
      initial: [0.2,-0.2],
      textHeight: 24,
      // pulsateTo: 1,
      // pulsateTime: 36,
      // reverse: false,
      // depth: 0.5,
      // maxSpeed: 0.05,
      // minSpeed: 0,
      // decel: 0.95,
      // interval: 20,
      // minBrightness: 0.1,
      // maxBrightness: 1,
      // outlineColour: '#ffff99',
      // outlineThickness: 2,
      // outlineOffset: 5,
      // outlineMethod: 'outline', // 'classic', 'block', 'colour', 'size', 'none'
      // outlineRadius: 0,
      // textColour: '#ff99ff',
      // textFont: 'Helvetica, Arial, sans-serif',
      // shadow: '#000',
      // shadowBlur: 0,
      // shadowOffset: [0,0],
      // hideTags: true,
      // weight: false,
      // weightMode: 'size', // 'colour', 'both', 'bgcolour', 'bgoutline', 'outline'
      // // weightFrom: null,
      // weightSize: 1,
      // // weightSizeMin: null,

      // weightSizeMax: 500,
    };

    closeResult = '';
	
    constructor(private skillsService:SkillsService, private modalService: NgbModal) {
      // console.log(this.skills);
      this.skillsService.getSkills().subscribe(response =>{
        if(!response.error){
          this.tags = response.data ? response.data : [];
        }else{
          this.tags = [];
        }
      })

      this.modalM = new Modal(this.modalService);
    }

    open(){
      this.modalM.open(this.modal)
    }
    
    tagClicked(tag:any) {
      console.log(tag);
      this.titleModal = tag ? tag.text : '';
      this.contentModal = tag ? tag.descripcion : '';
      this.modalM.open(this.modal)
    }

    themeSelection: boolean = false;

  // constructor(@Inject(DOCUMENT) private document: Document){
  //   let theme = window.localStorage.getItem('theme');
  //   if (theme){
  //     this.themeSelection = theme === 'dark' ? true : false;
  //     this.changeTheme(this.themeSelection);
  //   }
  // }

  // changeTheme(state:any){
  //   console.log('changeTheme', state);
  //   let theme = state ? 'dark' : 'light';
  //   window.localStorage.setItem('theme', theme);
  //   let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
  //   let href = 'lara-'+theme+'-blue'+'.css';
  //   console.log(href);
  //   themeLink.href = href;
  // }

    ngOnInit(): void {
    //   // this.themeSelection = true
    //   this.changeTheme(true);
      
    }

}
