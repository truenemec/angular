import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app';
import {PROVIDERS, DIRECTIVES} from './platform';



bootstrap(AppComponent,[
    ...PROVIDERS,
    ...DIRECTIVES]
).catch(err => console.error(err));;