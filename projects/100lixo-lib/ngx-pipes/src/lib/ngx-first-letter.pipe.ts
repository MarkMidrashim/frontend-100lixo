import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetter'
})
export class NgxFirstWordPipe implements PipeTransform {
  transform(value: string): string {
    return (value) ? value.charAt(0) : '';
  }
}
