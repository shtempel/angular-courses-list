import { Component, OnInit } from '@angular/core';

import { common } from './../../../constants/_const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  titles = {
    login: common.USER_LOGIN,
    logout: common.USER_LOGOFF
  };

  constructor() {
  }

  ngOnInit() {
  }

}
