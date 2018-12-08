import * as assets from './../constants/_const';
import * as moment from 'moment';

// ======================Factories=================
function setBorder(type: string, value: any) {
    if (type === 'dateRange') {
        return setBorderViaDateRange(value);
    }
}

// ======================Functions-helpers===========================

function setPaddingViaRating(rating: number) {
    return Number.isInteger(rating) ? assets.styles.PADDING_FOR_INTEGER : assets.styles.PADDING_FOR_NONE_INTEGER;
}

function setBorderViaDateRange(date: string) {
    if (moment(date).isBetween(moment(moment().subtract(14, 'days')).toDate(), moment())) {
        return assets.styles.SOLID_GREEN_BORDER;
    } else if (moment(moment().toDate()).isBefore(moment(date).toDate())) {
        return assets.styles.SOLID_BLUE_BORDER;
    }
}


export { setBorder };
