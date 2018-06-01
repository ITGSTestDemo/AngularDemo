import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app/services/app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'Demo login page';
  // userEmail: any = null;
  // userPassword: any = null;
  // emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor(public service: AppService) { }
  ngOnInit() {

  }
  // Loginclick() {
  //  // this.service.LoginAuthentication(this.userEmail, this.userPassword).toPromise().then((data) => { });
  //  this.service.login(this.userEmail, this.userPassword);
  // }
}

