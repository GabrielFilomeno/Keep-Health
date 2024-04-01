import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cmParaMetros',
  standalone: true
})
export class CmParaMetrosPipe implements PipeTransform {

  transform(value: number): number {

    let cm = value/100;

    return cm;
  }

}
