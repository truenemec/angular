import { RouterConfig }  from '@angular/router';
import { Pages }  from './pages.component';
import { About }  from './about/about.component';
import { PageNotFound }  from './page-not-found/page-not-found.component';

export const PagesRoutes: RouterConfig = [
    {
        path: 'pages',
        component: Pages,
        children: [
            {
                path: 'about',
                component: About
            },
            {
                path: "page-not-found",
                component: PageNotFound
            }
        ]
    }
];
