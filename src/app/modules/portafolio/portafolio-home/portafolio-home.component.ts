import { Component, ElementRef, ViewChild } from '@angular/core';
import { faDownload, faL } from '@fortawesome/free-solid-svg-icons';
import { slideInAnimation } from '@layout/animations';
import {trigger,state,style,animate,transition, query, group, animateChild}from '@angular/animations';
import { portafolioHeaderService } from '@layout/portafolio-header/portafolio-header.service';


@Component({
  selector: 'app-portafolio-home',
  templateUrl: './portafolio-home.component.html',
  styleUrls: ['./portafolio-home.component.css'],
  animations: [
    trigger('enterState', [
      state('*',style({
        opacity:0.7,
        background: '#c6c6c6'
      })),
      transition(':enter',[
        animate('900ms ease-out', style({
          opacity:0.5,
          background: '#c7c7c1'
        }))
      ]),
    ])
  ]
})

export class PortafolioHomeComponent {

    @ViewChild("skills") canvas!: ElementRef;
    
    public titleModal:string = 'Modal';
    public contentModal:string = 'Description';
    public title = 'angularTests';
    public list = ['Soy desarrollo de aplicaciones web']

    faDownload = faDownload;
    oyente = false;

    constructor(
      private sideBarService: portafolioHeaderService
    ) { 
      this.oyente = this.sideBarService.isOpen;
      console.log('portafolio',this.oyente);
    }
}
