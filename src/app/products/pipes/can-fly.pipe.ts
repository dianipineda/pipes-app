import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanFly implements PipeTransform {
  transform(value: string, toFly: boolean = false) {
    return toFly == false
      ? (value = 'no puede volar')
      : (value = 'puede volar');
  }
  //otra forma de hacer esta solución
  /*transform(value: boolean): 'vuela' | 'no vuela'{
    return value ? 'vuela' : 'no vuela';
  }*/
}
