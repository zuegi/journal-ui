import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {HttpClientModule} from '@angular/common/http';
import { MainSearchComponent } from './main-search/main-search.component';


@NgModule({
    declarations: [
        MainComponent,
        MainSearchComponent
    ],
    exports: [
        MainComponent
    ],
    imports: [
        CommonModule,
        MainRoutingModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        AutoCompleteModule,
        HttpClientModule
    ]
})
export class MainModule { }
