import '@angular/router';
import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'app',
  styles: [require('./app.styles.scss')],
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent { }