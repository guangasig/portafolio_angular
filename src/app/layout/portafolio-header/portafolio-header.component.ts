import { Component } from '@angular/core';

@Component({
  selector: 'app-portafolio-header',
  templateUrl: './portafolio-header.component.html',
  styleUrls: ['./portafolio-header.component.css']
})
export class PortafolioHeaderComponent {

  display='navbar-items';

  togle(){
    this.display = this.display == 'navbar-items' ? '' : 'navbar-items';
    console.log(this.display);
  }

}
