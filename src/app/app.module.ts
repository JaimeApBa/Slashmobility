import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { QuestionFormComponent } from './components/form/question-form.component';
import { FormItemComponent } from './components/form/form-item.component';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';
import { HeaderComponent } from './components/header/header.component';




@NgModule({
  declarations: [
    AppComponent,
    QuestionFormComponent,
    FormItemComponent,
    ProfileComponent,
    MapComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC-LdVjqqLDIUUVw_JzixSRD1jX_jfrb3c'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
