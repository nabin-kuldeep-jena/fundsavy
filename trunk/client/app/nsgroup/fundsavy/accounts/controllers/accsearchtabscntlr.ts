import {NavParams} from 'ionic-angular';
import {Component} from "@angular/core"
import {AccountCreditController} from './accountcreditcntlr';
//import {AccountSearchController} from './accountsearchcntlr';

@Component({
  templateUrl: 'build/nsgroup/fundsavy/accounts/views/accountsearchtabs.html'
 })

export class AccountSearchTabs {

  mySelectedIndex:number;
  tab1Root:any;
  tab2Root:any;

  static get parameters() {
    return [[NavParams]];
  }

  constructor(navParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;

    // set the root pages for each tab
    this.tab1Root = AccountCreditController;
    //this.tab2Root = AccountSearchController;
  }
}
