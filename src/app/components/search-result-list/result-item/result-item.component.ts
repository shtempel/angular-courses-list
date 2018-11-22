import { Component, Input, OnInit } from '@angular/core';
import { IMovieItem } from '../../../models';

import * as utils from '../../../../utils';

@Component({
    selector: 'app-result-item',
    templateUrl: './result-item.component.html',
    styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent implements OnInit {
    @Input() public movieItem: IMovieItem;
    border;
    padding;
    ratingBorder;

    constructor() {
    }

    ngOnInit() {
        this.ratingBorder = utils.styleHelper.setBorder('rating', this.movieItem.voteAverage);
        this.border = utils.styleHelper.setBorder('dateRange', this.movieItem.releaseDate);
        this.padding = utils.styleHelper.setPadding('rating', this.movieItem.voteAverage);
    }
}
