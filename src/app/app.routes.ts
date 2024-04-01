import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DietComponent } from './diet/diet.component';
import { ProfileComponent } from './profile/profile.component';
import { DietDetailComponent } from './diet/diet-detail/diet-detail.component';

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
        component: HomeComponent
    },
    {
        path: 'cadastro',
        component: CadastroComponent
    },
    {
        path: 'diet',
        children: [
            { path: '', component: DietComponent },
            { path: 'diet-detail/:id', component: DietDetailComponent }
        ]
    },
    {
        path: 'profile',
        component: ProfileComponent
    }

];
