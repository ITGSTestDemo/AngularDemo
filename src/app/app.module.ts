import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Router, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgModule, Component } from '@angular/core';
import {
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatIconModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppService } from '../app/services/app.service';
import { SaveSuccessComponent } from '../app/components/save-success.component';
import { PasswordRecoveryComponent } from './components/password-recovery.component';
import { LoginComponent } from './components/login.component';
import { ResetpasswordComponent } from './components/resetpassword.component';
import { ResetComponent } from './components/reset.component';
import { ApplicationConfigurationViewModelService } from '../shared/services/application-configuration-view-model.service';
const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'passwordRecovery', component: PasswordRecoveryComponent },
  { path: 'resetpassword/:id', component: ResetpasswordComponent },
  { path: 'reset', component: ResetComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    SaveSuccessComponent,
    PasswordRecoveryComponent,
    LoginComponent,
    ResetpasswordComponent,
    ResetComponent
  ],
  exports: [SaveSuccessComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    // other imports here  
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    MatSnackBarModule,
    MatIconModule
  ],
  entryComponents: [
    SaveSuccessComponent
  ],
  providers: [
    ApplicationConfigurationViewModelService,
    AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
