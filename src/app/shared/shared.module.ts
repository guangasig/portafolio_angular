import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import * as fromComponents from './components';
import { RouterModule } from '@angular/router';
import { ModalBootstrapComponent } from './components/modal/modal-bootstrap/modal-bootstrap.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardProjectComponent } from './components/cards/card-project/card-project.component';

@NgModule({
  declarations: [
    ...fromComponents.components,
    ModalBootstrapComponent,
    CardProjectComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FontAwesomeModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ...fromComponents.components
  ]
})
export class SharedModule { }
