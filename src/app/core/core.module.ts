import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Sirve para cargar todo lo necesario para la aplicacion.
 * Luego cuando el usuario interactúe con la aplicación, se llamará a otros componentes.
 * Esto se utiliza para no sobre cargar la aplicación.
 */

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
