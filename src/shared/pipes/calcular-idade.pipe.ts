import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcularIdade',
})
export class CalcularIdadePipe implements PipeTransform {

  transform(value: any): number {
    const diaAtual = new Date();
    const dataNascimento = new Date(value);
    let idade = diaAtual.getFullYear() - dataNascimento.getFullYear();
    const m = diaAtual.getMonth() - dataNascimento.getMonth();

    if (m < 0 || (m === 0 && diaAtual.getDate() < dataNascimento.getDate())) {
      idade--;
    }
    return idade;
  }
}
