import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {

    let formatter = new Intl.NumberFormat('fr-CA', {
      style: 'currency',
      currency: 'CAD',
    });



    return formatter.format(value);
  }

}
