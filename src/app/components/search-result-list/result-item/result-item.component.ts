import { Component, Input, OnInit } from '@angular/core';
import { IMovieItem } from '../../../models';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent implements OnInit {
    @Input() public movieItem: IMovieItem;
  constructor() { }

  ngOnInit() {
  }

}
