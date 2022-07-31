import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { ThemesComponent } from './themes/themes.component';
import {ButtonModule} from 'primeng/button';


@NgModule({
    declarations: [
        SettingsComponent,
        ThemesComponent
    ],
    exports: [
        ThemesComponent
    ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ButtonModule
  ]
})
export class SettingsModule { }
