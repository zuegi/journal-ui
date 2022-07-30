import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlayComponent} from './feature/play/play.component';
import {ErrorPage404Component} from './error/error-page404/error-page404.component';

const routes: Routes = [
  { path: 'application', loadChildren: () => import('./feature/application/application.module').then(m => m.ApplicationModule) },
  { path: 'main', loadChildren: () => import('./feature/main/main.module').then(m => m.MainModule) },
  {path: 'play', component: PlayComponent}, // FIXME to be removed - playground
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'journal', loadChildren: () => import('./feature/journal/journal.module').then(m => m.JournalModule) },
  {path: '**', component: ErrorPage404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
