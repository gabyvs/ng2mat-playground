import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import {
    MdCardModule,
    MdInputModule,
    MdProgressBarModule,
    MdToolbarModule }           from '@angular/material';
import { ReactiveFormsModule }  from '@angular/forms';

import { AppComponent }         from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MdCardModule,
        MdInputModule,
        MdProgressBarModule,
        MdToolbarModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
