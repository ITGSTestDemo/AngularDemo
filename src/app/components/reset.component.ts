import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  constructor(public service: AppService) { }
  userEmaidid: any = null;
  emailPattern = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
  ngOnInit() {
  }
  sendEmail() {
    this.service.sendResetLink(this.userEmaidid);
  }
}
