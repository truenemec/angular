import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { BsHeader } from '../common/components/bsHeader';
import { BsSidebar } from '../common/components/bsSidebar';
import { BsFooter } from '../common/components/bsFooter';

@Component({
    selector: "pages",
    template: `
    <bs-header></bs-header>
    <bs-sidebar></bs-sidebar>
    <router-outlet></router-outlet>
    <bs-footer></bs-footer>`,
    directives: [ROUTER_DIRECTIVES, BsHeader, BsSidebar, BsFooter]
})
export class Pages {
    constructor() {
    }
}
