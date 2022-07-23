import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlayComponent} from './feature/play/play.component';
import {ErrorPage404Component} from './error/error-page404/error-page404.component';

const routes: Routes = [
  {path: 'play', component: PlayComponent},
  { path: 'application', loadChildren: () => import('./feature/application/application.module').then(m => m.ApplicationModule) },
  {path: '', redirectTo: '/play', pathMatch: 'full'},
  {path: '**', component: ErrorPage404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
