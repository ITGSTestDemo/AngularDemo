import { Injectable, Component } from '@angular/core';
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import { Router } from '@angular/router';
import { HttpModule, RequestOptions, Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { LoginResponseModel, LoginResponselist } from '../models/loginResponseModel';
import { SaveSuccessComponent } from '../components/save-success.component';
import { ApplicationConfigurationViewModelService } from '../../shared/services/application-configuration-view-model.service';
import { Router } from '@angular/router';
@Injectable()
export class AppService {
  isemailSend = false;
  isResetLinkSend = false;
  isloginsuccessfull = false;
  title = 'Demo login page';
  loginData: LoginResponselist;
  isReset = false;
  message = null;
  apiBaseUrl: string = null;
  constructor(private http: HttpClient,
    public snackBar: MatSnackBar,
    public systemConfig: ApplicationConfigurationViewModelService,
    private router: Router) {
  }
  public getToken(): string {
    return localStorage.getItem('token');
  }

  login(email: string, password: string) {
    const myheaders: any = new HttpHeaders();
    myheaders.append('content-type', 'application/json');
    let body: HttpParams = new HttpParams();
    body = body.append('emailid', email);
    body = body.append('password', password);
    return this.http.post<LoginResponseModel>(this.systemConfig.application.env.apiBaseUrl + '/api/loginAuthentication', body
      , { headers: myheaders })
      .map(res => {
        if (res.loginList.length > 0) {
          this.isloginsuccessfull = true;
          this.openSnackBarSuccess('Login successfull');
        } else {
          this.isloginsuccessfull = false;
          this.openSnackBarSuccess('Login Failed');
        }
      })
      .toPromise();
  }

  openSnackBarSuccess(message: any) {
    const obj = this.snackBar.openFromComponent(SaveSuccessComponent, {
      data: message,
      duration: 2000,
      verticalPosition: 'top',
      extraClasses: ['mat-snack-bar-success', 'txtCen']
    });
  }


  sendEmail(emaild: any) {
    const myheaders: any = new HttpHeaders();
    myheaders.append('content-type', 'application/json');
    let body: HttpParams = new HttpParams();
    body = body.append('emailid', emaild);

    return this.http.post<string>(this.systemConfig.application.env.apiBaseUrl + '/api/sendEmail', body
      , { headers: myheaders })
      .map(res => {
        if (res === 'success') {
          this.isemailSend = true;
          const obj = this;
          this.message = 'Password send to your given email address please check';
          setTimeout(function () {
            obj.isemailSend = false;
            obj.message = null;
          }, 5000);
        } else {
          this.message = 'User does not found';
          this.isemailSend = true;
          const obj = this;
          setTimeout(function () {
            obj.isemailSend = false;
            obj.message = null;
          }, 5000);
        }
      })
      .toPromise();
  }

  sendResetLink(emaild: any) {
    const myheaders: any = new HttpHeaders();
    myheaders.append('content-type', 'application/json');
    let body: HttpParams = new HttpParams();
    body = body.append('emailid', emaild);

    return this.http.post<string>(this.systemConfig.application.env.apiBaseUrl + '/api/reset', body
      , { headers: myheaders })
      .map(res => {
        if (res === 'success') {
          this.isResetLinkSend = true;
          this.message = 'Link send to your given email address please check';
          const obj = this;
          setTimeout(function () {
            obj.isResetLinkSend = false;
            obj.message = null;
          }, 5000);
        } else {
          this.message = 'User does not found';
          this.isResetLinkSend = true;
          const obj = this;
          setTimeout(function () {
            obj.isResetLinkSend = false;
            obj.message = null;
          }, 5000);
        }
      })
      .toPromise();
  }

  changePassword(id: any, password: any) {
    const myheaders: any = new HttpHeaders();
    myheaders.append('content-type', 'application/json');
    let body: HttpParams = new HttpParams();
    body = body.append('password', password);
    body = body.append('id', id);

    return this.http.post<string>(this.systemConfig.application.env.apiBaseUrl + '/api/changePassword', body
      , { headers: myheaders })
      .map(res => {
        if (res === 'success') {
          this.openSnackBarSuccess('Password changed');
          const obj = this;
          setTimeout(function () {
            obj.router.navigate(['/login']);
          }, 2000);
        } else { this.isemailSend = false; }
      })
      .toPromise();
  }

  getResetLoginDetails(id: string) {
    const myheaders: any = new HttpHeaders();
    myheaders.append('content-type', 'application/json');
    let body: HttpParams = new HttpParams();
    body = body.append('id', id);
    return this.http.post<string>(this.systemConfig.application.env.apiBaseUrl + '/api/getLoginDetails', body
      , { headers: myheaders })
      .map(res => {
        if (res === 'success') {
          this.isReset = true;
        } else if (res === 'used') {
          this.isReset = false;
          this.message = 'Link is already used';
        } else {
          this.message = 'The link is expired';
          this.isReset = false;
        }
      })
      .toPromise();
  }
}

