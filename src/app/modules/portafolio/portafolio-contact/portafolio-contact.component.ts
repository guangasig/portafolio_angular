import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { faPhone, faEnvelope, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portafolio-contact',
  templateUrl: './portafolio-contact.component.html',
  styleUrls: ['./portafolio-contact.component.css']
})
export class PortafolioContactComponent implements AfterViewInit {
  
  public faPhone = faPhone;
  public faEnvelope = faEnvelope;
  public faMapLocationDot = faMapLocationDot;

  public links = [
    {icon:faPhone, text:"Teléfono", description:"0995819939"},
    {icon:faEnvelope, text:"Email", description:"informacion@manuelguangasig.com"},
    {icon:faMapLocationDot, text:"Ubicación", description:"Ecuador - Tungurahua - Ambato"}
  ] 

  // @ViewChild('box1') box: ElementRef;

  ngAfterViewInit(){
  //   gsap.fromTo(this.box.nativeElement, 
  //     {duration:2, ease: "power2.out", x: -100}, 
  //     {duration:2, ease: "power2.out", x: 0}
  //   );
  }

}
