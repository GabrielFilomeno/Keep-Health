import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { verificarLogadoChildGuard } from './verificar-logado-child.guard';

describe('verificarLogadoChildGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => verificarLogadoChildGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
