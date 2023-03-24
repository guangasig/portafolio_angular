import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePortafolioComponent } from '@modules/portafolio/home-portafolio/home-portafolio.component';
import { MasterComponent } from './layout/master/master.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePortafolioComponent,
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
