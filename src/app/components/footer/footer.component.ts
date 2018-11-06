import {Component, OnInit} from '@angular/core';

import {common} from './../../../constants/_const';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerText = common.COPYRIGHT;

  constructor() {
  }

  ngOnInit() {
  }

}
