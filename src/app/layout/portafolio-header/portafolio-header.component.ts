import { Component } from '@angular/core';
import { portafolioHeaderService } from './portafolio-header.service';
import { faHome, faListOl, faTableCells, faEnvelope, faBlog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portafolio-header',
  templateUrl: './portafolio-header.component.html',
  styleUrls: ['./portafolio-header.component.css']
})

export class PortafolioHeaderComponent {

  display='navbar-items';
  public faHome = faHome;
  public faListOl = faListOl;
  public faTableCells = faTableCells;
  public faEnvelope = faEnvelope;
  public faBlog = faBlog;

  constructor(
    private sideBarService: portafolioHeaderService
  ) { }

  togle(){
    this.display = this.display == 'navbar-items' ? '' : 'navbar-items';
    console.log(this.display);
    this.sideBarService.toggle();
  }

}
