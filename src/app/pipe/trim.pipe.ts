import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim',
  standalone: true
})
export class TrimPipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    const limit = Number.parseInt(args[0]);
    if(value.length <= limit) {
      return value;
    }
    return value.slice(0,limit) + '...';
  }

}
