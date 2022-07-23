import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import { ApplicationNewComponent } from './application-new/application-new.component';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';


@NgModule({
  declarations: [
    ApplicationComponent,
    ApplicationNewComponent,
    ApplicationDetailsComponent
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
