import {APP_ROUTER_PROVIDERS} from '../app/app.routes';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {HTTP_PROVIDERS} from '@angular/http';
import {FORM_PROVIDERS, LocationStrategy, HashLocationStrategy} from '@angular/common';

export const APPLICATION_PROVIDERS = [
    // new Angular 2 forms
    disableDeprecatedForms(),
    provideForms(),
    ...HTTP_PROVIDERS,
    ...APP_ROUTER_PROVIDERS,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
];

export const PROVIDERS =[
    ...APPLICATION_PROVIDERS
]