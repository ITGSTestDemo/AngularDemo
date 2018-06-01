import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor(public service: AppService, public activatedRout: ActivatedRoute) {
    const id = this.activatedRout.snapshot.params['id'];
    if (id != null && id !== 'undefined') {
      this.service.getResetLoginDetails(id);
    }
  }
  userPassword: any = null;
  ConfirmPassword: any = null;
  isvalid = true;
  ngOnInit() {

  }
  changePassword() {
    if (this.userPassword == null || this.userPassword === '') { return; }
    if (this.ConfirmPassword == null || this.ConfirmPassword === '') { return; }
    if (this.validatePassword()) { return; }
    const id = this.activatedRout.snapshot.params['id'];
    if (id != null && id !== 'undefined') {
      this.service.changePassword(id, this.userPassword);
    }
  }

  validatePassword() {
    if (this.userPassword == null || this.userPassword === '') { this.isvalid = true; return false; }
    if (this.ConfirmPassword == null || this.ConfirmPassword === '') { this.isvalid = true; return false; }
    if (this.userPassword !== this.ConfirmPassword) {
      this.isvalid = true;
      return true;
    } else {
      this.isvalid = false;
      return false;
    }
  }
}
