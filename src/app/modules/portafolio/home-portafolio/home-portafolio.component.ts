import { Component, ViewChild, ElementRef } from '@angular/core';
import { SkillsService } from '@data/services/api/skills/skills.service';
import { Tag } from 'ng-tagcanvas';

@Component({
  selector: 'app-home-portafolio',
  templateUrl: './home-portafolio.component.html',
  styleUrls: ['./home-portafolio.component.css']
})

export class HomePortafolioComponent {

    @ViewChild("skills") canvas!: ElementRef;
    
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
     freezeActive: false,
	  freezeDecel: false,
    activeCursor: 'pointer',
    pulsateTo: 1,
    pulsateTime: 3,
    reverse: false,
    depth: 0.5,
    maxSpeed: 0.05,
    minSpeed: 0,
    decel: 0.95,
    interval: 20,
    minBrightness: 0.1,
    maxBrightness: 1,
    outlineColour: '#ffff99',
    outlineThickness: 2,
    outlineOffset: 5,
    outlineMethod: 'outline', // 'classic', 'block', 'colour', 'size', 'none'
  outlineRadius: 0,
  textColour: '#ff99ff',
  textHeight: 15,
  textFont: 'Helvetica, Arial, sans-serif',
  shadow: '#000',
  shadowBlur: 0,
  shadowOffset: [0,0],
  initial: null,
  hideTags: true,
  zoom: 1,
  weight: false,
  weightMode: 'size', // 'colour', 'both', 'bgcolour', 'bgoutline', 'outline'
  // weightFrom: null,
  weightSize: 1,
	  // weightSizeMin: null,

	  // weightSizeMax: null,
  };
	
	constructor(private skillsService:SkillsService ) {

    // console.log(this.skills);
      

		this.skillsService.getSkills().subscribe(response =>{
      if(!response.error){
        this.tags = response.data ? response.data : [];
      }else{
        this.tags = [];
      }
    })
	}

	tagClicked(tag:any) {
		console.log(tag);
	}

}
