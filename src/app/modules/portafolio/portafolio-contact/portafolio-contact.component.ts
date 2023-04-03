import { Component } from '@angular/core';
import { faPhone, faEnvelope, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portafolio-contact',
  templateUrl: './portafolio-contact.component.html',
  styleUrls: ['./portafolio-contact.component.css']
})
export class PortafolioContactComponent {
  
  public faPhone= faPhone;
  public faEnvelope= faEnvelope;
  public faMapLocationDot= faMapLocationDot;

}
