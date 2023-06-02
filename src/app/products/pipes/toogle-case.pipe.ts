import { Pipe, PipeTransform } from '@angular/core';
// fernando | toogleCase = 'FERNANDO';
// FERNANDO | toogleCase = 'fernando

@Pipe({
  name: 'toogleCase',
})
export class ToogleCasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean = false): string {
    //console.log({ value, toUpper });
    return toUpper ? value.toUpperCase() : value.toLocaleLowerCase();
  }
}
