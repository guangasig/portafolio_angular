import { Component } from '@angular/core';
import { portafolioHeaderService } from './portafolio-header.service';

@Component({
  selector: 'app-portafolio-header',
  templateUrl: './portafolio-header.component.html',
  styleUrls: ['./portafolio-header.component.css']
})
export class PortafolioHeaderComponent {

  display='navbar-items';

  constructor(
    private sideBarService: portafolioHeaderService
  ) { }

  togle(){
    this.display = this.display == 'navbar-items' ? '' : 'navbar-items';
    console.log(this.display);
    this.sideBarService.toggle();
  }

}
