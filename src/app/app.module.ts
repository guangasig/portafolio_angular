import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MasterComponent } from './layout/master/master.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import { PortafolioMasterComponent  } from './layout/portafolio-master/portafolio-master.component';
import { PortafolioHeaderComponent  } from './layout/portafolio-header/portafolio-header.component';
import { PortafolioFooterComponent  } from './layout/portafolio-footer/portafolio-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    HeaderComponent, 
    FooterComponent,
    PortafolioMasterComponent,
    PortafolioHeaderComponent,
    PortafolioFooterComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    CoreModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
