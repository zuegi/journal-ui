import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JournalRoutingModule } from './journal-routing.module';
import { JournalComponent } from './journal.component';
import { JournalNewComponent } from './journal-new/journal-new.component';
import {MainModule} from '../main/main.module';


@NgModule({
  declarations: [
    JournalComponent,
    JournalNewComponent
  ],
  imports: [
    CommonModule,
    JournalRoutingModule,
    MainModule
  ]
})
export class JournalModule { }
