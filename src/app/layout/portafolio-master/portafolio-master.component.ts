import { Component, ElementRef, NgZone, OnInit, ViewChild, HostListener, AfterViewInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { TweenMax } from 'gsap';

@Component({
  selector: 'app-portafolio-master',
  templateUrl: './portafolio-master.component.html',
  styleUrls: ['./portafolio-master.component.css']
})
export class PortafolioMasterComponent implements AfterViewInit {

  @ViewChild('cursor') cursor: ElementRef;
  @ViewChild('circle') circle: ElementRef;
  
  public posX = 0;
  public posY = 0;
  public mouseX = 0;
  public mouseY = 0;

  constructor(private contexts: ChildrenOutletContexts, private ngZone: NgZone) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  @HostListener('document:mousemove', ['$event']) 

  onMouseMove(e:any) {

    this.mouseX = e.clientX;
    this.mouseY = e.clientY;

    this.posX  += (this.mouseX - this.posX ) / 3;
    this.posY += (this.mouseY - this.posY) / 3;

    TweenMax.set(this.circle.nativeElement, {
         css: {
          left: this.posX - 6,
          top: this.posY - 6
        },
        stagger: 0.15, ease: "Sine.easeOut"
    });

    TweenMax.to(this.cursor.nativeElement, 0.016, { 
        css: {
            left: this.mouseX,
            top: this.mouseY
        },
        stagger: 0.15, ease: "Sine.easeOut"
      }
    );

  }

  ngAfterViewInit() {
    
  }
}
