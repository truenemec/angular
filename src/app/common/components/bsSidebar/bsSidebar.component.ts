import {Component} from '@angular/core';
import { BsMenu } from '../bsMenu';

@Component({
    selector: "bs-sidebar",
    styles: [require('./bsSidebar.scss')],
    template: require("./bsSidebar.html"),
    directives:[BsMenu]
})
export class BsSidebar {
    constructor() {
    }
}
