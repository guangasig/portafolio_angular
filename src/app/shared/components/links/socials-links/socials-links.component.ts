import { Component } from '@angular/core';
import { faPhone, faEnvelope, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-socials-links',
  templateUrl: './socials-links.component.html',
  styleUrls: ['./socials-links.component.css']
})

export class SocialsLinksComponent {

  public faPhone = faPhone;
  public faEnvelope = faEnvelope;
  public faMapLocationDot = faMapLocationDot;

}
