import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MasterComponent as MasterPortafolioComponent } from './portafolio/master/master.component';


/**
 * Estrutura de la aplicación.
 */

@NgModule({
  declarations: [
    MasterComponent,
    HeaderComponent,
    FooterComponent,
    MasterPortafolioComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
