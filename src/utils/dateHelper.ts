import * as moment from 'moment';

function setBorder(courseCreationDate, freshBorder, futureBorder) {
    if (moment(courseCreationDate).isBetween(moment(moment().subtract('years', 5)).toDate(), moment())) {
        return freshBorder;
    } else if (moment(moment().toDate()).isBefore(moment(courseCreationDate).toDate())) {
        return futureBorder;
    }
}

function orderByDateHelper(array) {
    return array.sort((a, b) => {
        const dateA: any = new Date(a.releaseDate);
        const dateB: any = new Date(b.releaseDate);
        return dateB - dateA;
    });
}

export { setBorder, orderByDateHelper };
