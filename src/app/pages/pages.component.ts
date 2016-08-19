import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { BsHeader } from '../common/components/bsHeader';
import { BsSidebar } from '../common/components/bsSidebar';
import { BsFooter } from '../common/components/bsFooter';

@Component({
    selector: "pages",
    template: `<div class="page-wrapper">
    <bs-header></bs-header>
    <bs-sidebar></bs-sidebar>
    <div class="bs-main">
        <router-outlet></router-outlet>
    </div>
    <bs-footer></bs-footer>
    </div>`,
    directives: [ROUTER_DIRECTIVES, BsHeader, BsSidebar, BsFooter]
})
export class Pages {
    constructor() {
    }
}
