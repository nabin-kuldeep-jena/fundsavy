/**
 * Created by nabin.jena on 6/12/2016.
 */
import {Events, Platform, MenuController,NavController} from 'ionic-angular';
import { Component } from '@angular/core';
import { ACCORDION_DIRECTIVES } from "ng2-bootstrap";
import {SideMenuConfigModel,MenuItem} from "../../../core/common/models/menumodels";
import {NSClient} from "../../../core/common/init/launcher";
import {IONIC_DIRECTIVES} from 'ionic-angular';
import {NSControllerFactory} from "../../../core/common/init/controllerregistery";
import {SubMenuItem} from "../../../core/common/models/menumodels";


@Component({
    selector: 'ns-side-menu',
    templateUrl: 'build/nsgroup/framework/module/menu/views/nssidemenu.html',
    directives: [ACCORDION_DIRECTIVES,IONIC_DIRECTIVES]

})

export class NSSideMenu
{
    events:Events;
    appPages:any;
    menu:MenuController;
    nav:NavController;
    sideMenuConfigModel:SideMenuConfigModel;
    constructor(nav:NavController,events:Events, menu:MenuController)
    {
        this.nav=nav;
        this.events=events;
        this.menu=menu;
        this.sideMenuConfigModel=NSClient.config.getMenuConfig();
        console.log(this.sideMenuConfigModel);
    }

    public onClickMenuItem(menuItem:MenuItem):void
    {
       console.log(menuItem.componentName);
        this.menu.close();
       this.nav.setRoot(NSControllerFactory.getController(menuItem.componentName));
    }
    public onClickSubMenuItem(subMenuItem:SubMenuItem):void
    {
        console.log(subMenuItem.componentName);
        this.menu.close();
        this.nav.setRoot(NSControllerFactory.getController(subMenuItem.componentName));
    }


    public isGroupShown(menuItem:MenuItem):boolean
    {
        return true;
    }
}