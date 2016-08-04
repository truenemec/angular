import {provideRouter, RouterConfig} from '@angular/router';
import {PagesRoutes} from "./pages/pages.routes";
import { About }  from './pages/about/about.component';
import { PageNotFound }  from './pages/page-not-found/page-not-found.component';

export const routes:RouterConfig = [
    ...PagesRoutes,
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/pages/about'
    },
    {
        path: '**',
        redirectTo: '/pages/page-not-found'
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];