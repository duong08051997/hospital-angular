import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BedsComponent} from './components/beds/beds.component';
import {MasterComponent} from './layouts/master/master.component';

const routes: Routes = [
  {path: '', redirectTo: 'master', pathMatch: 'full'},
  {
    path: 'master',
    children: [
      {
        path: '',
        component: BedsComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
