import {Component} from '@angular/core';
import {ViewController, NavController} from 'ionic-angular';
import {AccountNewController} from '../../accounts/controllers/accountnewcntlr';
import {ExpenseShareController} from '../../accounts/controllers/expensesharecntlr';
@Component({
  template: `
    <ion-list>
      <button ion-item (click)="openNewAccount()">New account</button>
      <button ion-item (click)="createShare()">Create share</button>
    </ion-list>
  `
})
export class PopoverPage {
  nav: NavController;
  constructor(private viewCtrl: ViewController, nav : NavController) {
    this.nav=nav;
  }

  close() {
    this.viewCtrl.dismiss();
  }
  
  openNewAccount()
  {
    this.close();
    this.nav.push(AccountNewController);
  }
  createShare()
  {
    this.close();
    this.nav.push(ExpenseShareController);
  }
}