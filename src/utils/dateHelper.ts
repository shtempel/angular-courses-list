import { ICourseItem } from '../app/models';
import * as moment from 'moment';

function checkDate(courseCreationDate, freshBorder, futureBorder) {
    if (moment(courseCreationDate).isBetween(moment(), moment(moment().subtract('days', 14)).toDate())) {
        return freshBorder;
    } else if (moment(moment().toDate()).isBefore(moment(courseCreationDate).toDate())) {
        return futureBorder;
    }
}

function orderByDateHelper(array: ICourseItem[]) {
    return array.sort((a, b) => {
        const dateA: any = new Date(a.date);
        const dateB: any = new Date(b.date);
        return dateB - dateA;
    });

}

export { checkDate, orderByDateHelper };
