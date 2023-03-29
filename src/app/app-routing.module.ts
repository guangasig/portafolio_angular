import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioMasterComponent } from '@layout/portafolio-master/portafolio-master.component';
import { MasterComponent } from './layout/master/master.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'page/portafolio',
    pathMatch: 'full'
  },
  {
    path: 'page',
    component: PortafolioMasterComponent,
    children: [
      {
        path: 'portafolio',
        loadChildren: () => import('@modules/portafolio/portafolio.module').then((m) => m.PortafolioModule),
      }
    ]
  },
  {
    path: 'panel',
    component: MasterComponent,
    children: [
      {
        path: 'aunth',
        loadChildren: () => import('@modules/aunth/aunth.module').then((m) => m.AunthModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
