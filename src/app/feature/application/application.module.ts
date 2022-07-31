import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import { AddRowDirective } from './add-row.directive';


@NgModule({
  declarations: [
    ApplicationComponent,
    AddRowDirective,
  ],
  exports: [
    ApplicationComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    TableModule,
    FormsModule,
    ButtonModule,
    RippleModule
  ]
})
export class ApplicationModule { }
