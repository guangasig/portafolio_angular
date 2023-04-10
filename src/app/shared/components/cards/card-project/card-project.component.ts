import { Component, Input } from '@angular/core';
import { faListCheck, faEyeLowVision, faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent {

  public faFileArchive = faListCheck;
  public faEyeLowVision = faEyeLowVision;
  public faLink = faLink;
  public programas = [];

  @Input() name = 'Name';
  @Input() date = 'Date description';
  // @Input() programas = '';

}
