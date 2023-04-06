import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-title-portafolio',
  templateUrl: './title-portafolio.component.html',
  styleUrls: ['./title-portafolio.component.css']
})

export class TitlePortafolioComponent implements AfterViewInit {
  
  @Input() title = 'Title';
  @Input() description = 'Description';
  @ViewChild('titlePortafolio') titlePortafolio: ElementRef;

  ngAfterViewInit(){
    gsap.fromTo(this.titlePortafolio.nativeElement, 
      {duration:3, ease: "power2.out", y: -100}, 
      {duration:3, ease: "power2.out", y: 0}
    );
  }
  
}
