import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournalComponent } from './journal.component';
import {JournalNewComponent} from './journal-new/journal-new.component';

const routes: Routes = [
  { path: '', component: JournalComponent },
  { path: 'new', component: JournalNewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JournalRoutingModule { }
