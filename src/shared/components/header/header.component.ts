import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  menuWidthMin768px: MenuItem[] | undefined;
  menuWidthMax768px: MenuItem[] | undefined;

    position = 'top';

    ngOnInit(): void  {
        this.menuWidthMin768px = [
            {
                label: 'Inicio',
                rota: () => this.rotaHome()
            },
            {
                label: 'Exercícios',
                rota: () => this.rotaExercicios()
            },
            {
                label: 'Perfil',
                rota: () => this.rotaPerfil()
            },
            {
                label: 'Dietas',
                rota: () => this.rotaDietas()
            },
            {
                label: 'Login',
                rota: () => this.rotaLogin()
            },
            {
                label: 'Cadastro',
                rota: () => this.rotaCadastro()
            }
        ];

        this.menuWidthMax768px = [
          {
              label: 'Inicio',
              rota: () => this.rotaHome()
          },
          {
              label: 'Login',
              rota: () => this.rotaLogin()
          },
          {
              label: 'Cadastro',
              rota: () => this.rotaCadastro()
          }
      ];
    } 

  constructor (private router: Router) {}

  rotaHome() {
    this.router.navigate(['/home']);
  }
  rotaPerfil() {
    this.router.navigate(['/profile']);
  }
  rotaExercicios() {
    this.router.navigate(['/exercicios']);
  }
  rotaDietas() {
    this.router.navigate(['/diet']);
  }
  rotaLogin() {
    this.router.navigate(['/login']);
  }
  rotaCadastro() {
    this.router.navigate(['/cadastro']);
  }
}
