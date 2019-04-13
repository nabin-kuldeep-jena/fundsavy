import {NavController,Platform} from 'ionic-angular';
import {Component} from "@angular/core";
import {NSClient} from "../../framework/core/common/init/launcher";
import {Http} from "../../../../node_modules/@angular/http/src/http";



import {AccountsSearchController} from '../accounts/controllers/accountssearchCntlr';
import {EntrypointController} from "../../framework/entrypoint/controllers/entrypointcntlr";
import {NSSideMenu} from "../../framework/module/menu/controller/nssidemenucntlr";
import {RootInstallerService} from "../../framework/installer/root/services/installerservice";
import {AllAccountsController} from "../accounts/controllers/allaccountscntlr";

@Component({
  templateUrl: 'build/nsgroup/fundsavy/entrypoint/entrypoint.html',
  directives: [NSSideMenu],
})
export class FundSavyEntryPointController extends EntrypointController {
  public foundRepos;
    public username;
    nav:NavController;
    constructor(nav: NavController,platform:Platform,http:Http) {
     super(platform,http);
     this.nav=nav;
        //this.nav.push(AccountSearchController);
    }

    getRepos() {
        console.log(NSClient.platform.lang());
        console.log(NSClient.config.getMenuConfig());
        var installer=new RootInstallerService();
        installer.initialize(null);
        installer.execute();
        this.nav.push(AllAccountsController);
    }
}


/*import {AccountSearchController} from '../accounts/controllers/accountsearchcntlr';
import {AccountSearchTabs} from '../accounts/controllers/accsearchtabscntlr';
import {AccountsSearchController} from '../accounts/controllers/accountssearchCntlr';

@Component({
    templateUrl: 'build/nsgroup/fundsavy/entrypoint/entrypoint.html'
})
export class FundSavyEntryPointController {
    public username;
    public nav;
     tab1:any;
  tab2:any;
    constructor(nav : NavController) {
        this.nav=nav;
      // this.tab1 = AccountSearchController;
   // this.tab2 = AccountSearchController;
        this.nav.push(AccountsSearchController);
    }
}*/

