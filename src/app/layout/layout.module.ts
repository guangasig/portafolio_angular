import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PortafolioMasterComponent } from './portafolio-master/portafolio-master.component';
import { PortafolioFooterComponent } from './portafolio-footer/portafolio-footer.component';
import { PortafolioHeaderComponent } from './portafolio-header/portafolio-header.component';


/**
 * Estrutura de la aplicación.
 */

@NgModule({
  declarations: [
    MasterComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioMasterComponent,
    PortafolioFooterComponent,
    PortafolioHeaderComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
