import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dates'
})
export class DatesPipe implements PipeTransform {

  transform(timestamp:any): string {

    let now  = new Date();
    let date = new Date(timestamp);

    return new DatePipe('en').transform(date, 'aaaa h:mm');

  }

}
