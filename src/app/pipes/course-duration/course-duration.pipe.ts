import { Pipe, PipeTransform } from '@angular/core';

import { durationHelper } from './../../../utils';

@Pipe({
    name: 'courseDuration'
})
export class CourseDurationPipe implements PipeTransform {
    transform(duration: number) {
        return durationHelper.formatDuration(duration);
    }
}
