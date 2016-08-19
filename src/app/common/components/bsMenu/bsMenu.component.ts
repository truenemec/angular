import {Component} from "@angular/core"
import {BsMenuItem} from "./bsMenuItem"

@Component({
    selector: "bs-menu",
    template: require("./bsMenu.html"),
    directives: [BsMenuItem]
})
export class BsMenu{
    public menuItems: BsMenuItem[];
    constructor(){
    }
}