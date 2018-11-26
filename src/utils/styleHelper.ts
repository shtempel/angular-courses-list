import * as assets from './../constants/_const';
import * as moment from 'moment';

//======================Factories=================
function setBorder(type: string, value: any) {
    if (type === 'rating') {
        return setBorderViaRating(value);
    } else if (type === 'dateRange') {
        return setBorderViaDateRange(value);
    }
}

function setPadding(type: string, value: number) {
    if (type === 'rating') {
        return setPaddingViaRating(value);
    }
}

//======================Functions-helpers===========================

function setPaddingViaRating(rating: number) {
    return Number.isInteger(rating) ? assets.styles.PADDING_FOR_INTEGER : assets.styles.PADDING_FOR_NONE_INTEGER;
}

function setBorderViaDateRange(date: string) {
    if (moment(date).isBetween(moment(moment().subtract(4, 'years')).toDate(), moment())) {
        return assets.styles.SOLID_GREEN_BORDER;
    } else if (moment(moment().toDate()).isBefore(moment(date).toDate())) {
        return assets.styles.SOLID_BLUE_BORDER;
    }
}

function setBorderViaRating(value: number) {
    let result: string;
    if (value < 4) {
        result = assets.styles.LOW_RATING_BORDER;
    } else if (value <= 7) {
        result = assets.styles.MEDIUM_RATING_BORDER;
    }
    if (value > 7) {
        result = assets.styles.HIGH_RATING_BORDER;
    }
    return result;
}

export { setBorder, setPadding };
