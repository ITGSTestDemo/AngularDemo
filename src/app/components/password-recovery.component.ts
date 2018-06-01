import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecoveryComponent implements OnInit {
  userEmaidid = null;
  emailPattern = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'; 
  constructor(public service: AppService) { }

  ngOnInit() {
  }
  sendEmail() {
    this.service.sendEmail(this.userEmaidid);
    this.userEmaidid = null;
  }


}
