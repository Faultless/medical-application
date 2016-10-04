import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header.component';
import { AlertModule, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DoctorsComponent } from './doctors/doctors.component';
import {DoctorListComponent} from './doctors/doctor-list/doctor-list.component';
import {DoctorItemComponent} from './doctors/doctor-list/doctor-item.component';
import { DoctorDetailComponent } from './doctors/doctor-detail/doctor-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DoctorsComponent,
    DoctorListComponent,
    DoctorItemComponent,
    DoctorDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
    DatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
