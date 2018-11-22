import { Component, Input, OnInit } from '@angular/core';
import { IMovieItem } from '../../../models';

import * as assets from '../../../../constants/_const';
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
    assets = {
        freshBorder: assets.styles.SOLID_GREEN_BORDER,
        futureBorder: assets.styles.SOLID_BLUE_BORDER
    };

    constructor() {
    }

    ngOnInit() {
        this.border = utils.dateHelper.setBorder(this.movieItem.releaseDate, this.assets.freshBorder, this.assets.futureBorder);
        this.ratingBorder = utils.borderHelper.setBorderRating(this.movieItem.voteAverage);
        this.padding = utils.paddingHelper.setPadding(this.movieItem.voteAverage);
    }
}
