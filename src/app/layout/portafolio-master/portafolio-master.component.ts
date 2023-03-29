import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-portafolio-master',
  templateUrl: './portafolio-master.component.html',
  styleUrls: ['./portafolio-master.component.css']
})
export class PortafolioMasterComponent {

  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

}
