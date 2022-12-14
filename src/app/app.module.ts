import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayComponent } from './feature/play/play.component';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {ListboxModule} from 'primeng/listbox';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ApplicationModule} from './feature/application/application.module';
import {MainModule} from './feature/main/main.module';
import {SettingsModule} from './feature/settings/settings.module';

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        InputTextModule,
        InputTextareaModule,
        CalendarModule,
        ListboxModule,
        DropdownModule,
        ApplicationModule,
        MainModule,
        SettingsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
