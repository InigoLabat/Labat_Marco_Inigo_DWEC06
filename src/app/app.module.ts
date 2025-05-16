import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingProviders, routing } from './app.routing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AthletesComponent } from './athletes/athletes.component';
import { AthleteFormComponent } from './athlete-form/athlete-form.component';
import { AthleteDetailComponent } from './athlete-detail/athlete-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AthletesComponent,
    AthleteFormComponent,
    AthleteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
