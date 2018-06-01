import { Component, OnInit, Inject } from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material';

@Component({
  selector: 'app-save-success',
  templateUrl: './save-success.component.html',
  styleUrls: ['./save-success.component.scss']
})
export class SaveSuccessComponent implements OnInit {
  textcontent: string;
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit() {
  }

}
