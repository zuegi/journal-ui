import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JournalRoutingModule } from './journal-routing.module';
import { JournalComponent } from './journal.component';
import { JournalNewComponent } from './journal-new/journal-new.component';
import {MainModule} from '../main/main.module';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {DividerModule} from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';
import {EditorModule} from 'primeng/editor';
import {InputTextModule} from 'primeng/inputtext';
import {BreadcrumbModule} from 'primeng/breadcrumb';


@NgModule({
  declarations: [
    JournalComponent,
    JournalNewComponent
  ],
    imports: [
        CommonModule,
        JournalRoutingModule,
        MainModule,
        FormsModule,
        ButtonModule,
        DividerModule,
        DropdownModule,
        EditorModule,
        InputTextModule,
        BreadcrumbModule
    ]
})
export class JournalModule { }
