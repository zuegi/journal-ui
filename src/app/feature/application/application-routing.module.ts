import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application.component';
import {ErrorPage404Component} from '../../error/error-page404/error-page404.component';

const routes: Routes = [
  { path: '', component: ApplicationComponent },
  { path: '**', component: ErrorPage404Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
