import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const verificarLogadoGuard: CanActivateFn = (route, state) => {

  const router = inject ( Router );

  const idUsuarioLogado = Number(localStorage.getItem('idUsuarioLogado'));

  if (idUsuarioLogado > 0) {
    return true;
  } else {
    alert('Faça o login para acessar')
    router.navigate(['/login']);
    return false;
  }
};
