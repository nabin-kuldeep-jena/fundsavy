import {Page, NavController,Popover} from 'ionic-angular';
import {Component} from "@angular/core";
import {PopoverPage} from '../../common/popover/popovercntlr';
import {AccountsSearchController} from './accountssearchcntlr';
import {NSSideMenu} from "../../../framework/module/menu/controller/nssidemenucntlr";
import {AccountSearchTabs} from "./accsearchtabscntlr";
import {AccountDAO} from "../../common/database/accountsdao";
import {DataSource} from "../../../framework/database/datasource";
import {DataSourcePool} from "../../../framework/database/datasource";
//import {NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
@Component({
  //directives: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: 'build/nsgroup/fundsavy/accounts/views/allaccounts.html',
    directives: [NSSideMenu],
})

export class AllAccountsController{
public accounts:Array;
  public nav;
  type: string = "Debits";
    dataSource:DataSource;
   constructor(nav : NavController){
   this.nav=nav;
       this.dataSource=DataSourcePool.getDatasource();
       this.accounts=new Array<Object>();
  }
  ngOnInit() {
    /* this.accounts=[
      {accName:'Axis Bank',accNo:'911201005435', image:'build/nsgroup/fundsavy/resources/images/test/axisbank.png', accCurBal:'RS 12,435'},
      {accName:'HDFC Bank',accNo:'452365676878',image:'build/nsgroup/fundsavy/resources/images/test/hdfc_bank.png', accCurBal:'RS 12,435'},
      {accName:'SBI Bank',accNo:'653487928323',image:'build/nsgroup/fundsavy/resources/images/test/sbi.jpg', accCurBal:'RS 12,435'},
      {accName:'ICICI Bank',accNo:'69023798238',image:'build/nsgroup/fundsavy/resources/images/test/icici_bank.jpg', accCurBal:'RS 12,435'}
  ]*/
      this.dataSource.query("select * from account_tbl").then((data)=> {
          if (data.res.rows.length > 0) {
              for (var i = 0; i < data.res.rows.length; i++) {
                  this.accounts.push({
                      accId: data.res.rows.item(i).acc_id,
                      accNo: data.res.rows.item(i).acc_number,
                      accName: data.res.rows.item(i).acc_name,
                      accType: data.res.rows.item(i).acc_type,
                      accStatus: data.res.rows.item(i).acc_status,
                      accDetails: data.res.rows.item(i).acc_details,
                      image: data.res.rows.item(i).img_path });
              }
          }
          return  this.accounts;
      }, (error) => {
          console.log("ERROR: " + JSON.stringify(error));
      });
  }
   presentPopover(myEvent) {
    let popover = Popover.create(PopoverPage);
     this.nav.present(popover, {
      ev: myEvent
    });
    }
    openSearchScreen(){
     this.nav.push(AccountsSearchController);
    }
     onSegmentChanged(segmentEvent){
       this.type=segmentEvent.value;
     }

}
