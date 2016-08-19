import {Component, Input} from "@angular/core"

@Component({
    selector: "bs-menu-item",
    template: require("./bsMenuItem.html")
})
export class BsMenuItem{
    @Input() menuItem:any;
}