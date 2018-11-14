import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchSorting'
})
export class SearchSortingPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
