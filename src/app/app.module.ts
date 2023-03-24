import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TagCanvasModule } from 'ng-tagcanvas';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { MasterComponent } from './layout/master/master.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomePortafolioComponent } from './modules/portafolio/home-portafolio/home-portafolio.component';
import { HelloComponent } from '@modules/portafolio/home-portafolio/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    HeaderComponent, 
    FooterComponent,
    HomePortafolioComponent,
    HelloComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    TagCanvasModule,
    CoreModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
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
