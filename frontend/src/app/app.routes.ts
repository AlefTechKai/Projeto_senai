import { Routes } from '@angular/router';
import { Marcas } from './pages/marcas/marcas';
import { Modelos } from './pages/modelos/modelos';
import { Sobre } from './pages/sobre/sobre';

export const routes: Routes = [
    //cria uma rota raiz que redireciona para a página de marcas
    { path: '', redirectTo: 'marcas', pathMatch: 'full' },
    { path: 'marcas', component: Marcas },
    { path: 'modelos', component: Modelos },
    { path: 'sobre', component: Sobre }
];
