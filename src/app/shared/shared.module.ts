import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import * as fromComponents from './components';
import { RouterModule } from '@angular/router';
import { ModalBootstrapComponent } from './components/modal/modal-bootstrap/modal-bootstrap.component';

@NgModule({
  declarations: [
    ...fromComponents.components,
    ModalBootstrapComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
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
