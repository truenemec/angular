import '@angular/router';
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'app',
   //template: '<h1>My First Angular 2 App</h1>'
   template: '<router-outlet></router-outlet>',
   directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }