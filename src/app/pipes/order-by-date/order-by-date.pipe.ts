import { Pipe, PipeTransform } from '@angular/core';

import { dateHelper } from './../../../utils';
import { ICourseItem } from '../../models';

@Pipe({
    name: 'orderByDate'
})
export class OrderByDatePipe implements PipeTransform {
    transform(array: ICourseItem[]) {
        return dateHelper.orderByDateHelper(array);
    }
}
