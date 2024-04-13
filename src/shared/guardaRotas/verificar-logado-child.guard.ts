import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const verificarLogadoChildGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject ( Router );

  const idUsuarioLogado = Number(localStorage.getItem('idUsuarioLogado'));
  const id = childRoute.params['id'];

  if (idUsuarioLogado > 0 && id === Number) {
    return true;
  } else {
    alert('Faça o login para acessar')
    router.navigate(['/login']);
    return false;
  }
};
