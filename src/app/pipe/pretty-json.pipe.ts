import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyJson',
  standalone: true
})
export class PrettyJsonPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    try {
      /**
       * check and try to parse value if it's not an object
       * if it fails to parse which means it is an invalid JSON
       */
      return this.applyColors(
        typeof value === 'object' ? value : JSON.parse(value),
        args[0],
        args[1]
      );
    } catch (e) {
      return this.applyColors({ error: 'Invalid JSON' }, args[0], args[1]);
    }
  }


  applyColors(obj: any, showNumebrLine: boolean = false, padding: number = 4) {
    // line number start from 1
    let line = 1;

    if (typeof obj != 'string') {
      obj = JSON.stringify(obj, undefined, 3);
    }

    /**
     * Converts special charaters like &, <, > to equivalent HTML code of it
     */
    obj = obj.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    

     
    /**
     * Regex for the start of the line, insert a number-line themeClass tag before each line
     */
    return showNumebrLine
      ? obj.replace(
          /^/gm,
          () =>
            `<span class="number-line pl-3 select-none" >${String(line++).padEnd(padding)}</span>`
        )
      : obj;
  }

}
