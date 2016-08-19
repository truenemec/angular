import {Component} from '@angular/core';

@Component({
    styles: [require('./bsHeader.scss')],
    selector: "bs-header",
    template: require("./bsHeader.html")
})
export class BsHeader {
    constructor() {
    }
}
