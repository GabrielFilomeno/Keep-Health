import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ProfileComponent } from './profile/profile.component';
import { ExerciciosComponent } from './exercicios/exercicios.component';
import { verificarLogadoGuard } from '../shared/guardaRotas/verificar-logado.guard';


export const routes: Routes = [

    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [ verificarLogadoGuard ]
    },
    {
        path: 'cadastro',
        component: CadastroComponent
    },
    {
        path: 'exercicios',
        component: ExerciciosComponent,
        canActivate: [ verificarLogadoGuard ]
    },
    {
        path: 'diet',
        loadChildren: () => import('./lazyLoading/lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule),
        canActivate: [verificarLogadoGuard]
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [ verificarLogadoGuard ]
    }

];
