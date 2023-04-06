import { Component, Input } from '@angular/core';
import { faCircle, faPhone, faEnvelope, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-socials-media',
  templateUrl: './socials-media.component.html',
  styleUrls: ['./socials-media.component.css']
})

export class SocialsMediaComponent {

  public faCircle = faCircle;
  public faPhone = faPhone;
  public faEnvelope = faEnvelope;
  public faMapLocationDot = faMapLocationDot;

  @Input() icono = faCircle;
  @Input() text = 'Title';
  @Input() description = 'Description';

  inconos(){
    return this.icono
  }
}
