import {NavController} from 'ionic-angular';
import {Component} from "@angular/core";
import {AccountsSearchPipe} from '../../common/pipes/accountssearchpipe';

@Component({
  pipes: [AccountsSearchPipe],
  templateUrl: 'build/nsgroup/fundsavy/accounts/views/accountssearch.html'
})

export class AccountsSearchController{
  public accounts;
  public nav;
  searchQuery: string="";
  constructor(nav : NavController){
   this.nav=nav;
   //this.initialiseAccounts();
  }
  onCancel(ev)
  {
    
  }
   getAccounts(ev) {
    //console.log("Fetching accounts");
    /*this.accounts=[
      {accName:'Axis Bank',accNo:'911201005435', image:'build/nsgroup/fundsavy/resources/images/test/axisbank.png', accCurBal:'RS 12,435'},
      {accName:'HDFC Bank',accNo:'452365676878',image:'build/nsgroup/fundsavy/resources/images/test/hdfc_bank.png', accCurBal:'RS 12,435'},
      {accName:'SBI Bank',accNo:'653487928323',image:'build/nsgroup/fundsavy/resources/images/test/sbi.jpg', accCurBal:'RS 12,435'},
      {accName:'ICICI Bank',accNo:'69023798238',image:'build/nsgroup/fundsavy/resources/images/test/icici_bank.jpg', accCurBal:'RS 12,435'}
*/
//return this.accounts;
/*if(searchbar.value.trim.length==0)
            return "";
        else
            return searchbar.value.filter((value)=>value.accName.startsWith(searchbar.value));*/
            this.initialiseAccounts();
            var val=ev.target.value;
            
            if (val && val.trim() != '') {
      this.accounts = this.accounts.filter((account) => {
        return (account.accName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
            
           /* if(searchValue.trim()=='')
            {
              return;
            }
            else
            {
              this.accounts=this.accounts.filter((v)=>{
                if(v.accName.toLowerCase().indexOf(searchValue.toLowerCase())>-1)
                  return true;
                else
                  return false; 
              })
            }*/
    }
    initialiseAccounts(){
      this.accounts=[
      {accName:'Axis Bank',accNo:'911201005435', image:'build/nsgroup/fundsavy/resources/images/test/axisbank.png', accCurBal:'RS 12,435'},
      {accName:'HDFC Bank',accNo:'452365676878',image:'build/nsgroup/fundsavy/resources/images/test/hdfc_bank.png', accCurBal:'RS 12,435'},
      {accName:'SBI Bank',accNo:'653487928323',image:'build/nsgroup/fundsavy/resources/images/test/sbi.jpg', accCurBal:'RS 12,435'},
      {accName:'ICICI Bank',accNo:'69023798238',image:'build/nsgroup/fundsavy/resources/images/test/icici_bank.jpg', accCurBal:'RS 12,435'}

  ]
    }
    ngOnInit() {
  /*  this.accounts=[
      {accName:'Axis Bank',accNo:'911201005435', image:'build/nsgroup/fundsavy/resources/images/test/axisbank.png', accCurBal:'RS 12,435'},
      {accName:'HDFC Bank',accNo:'452365676878',image:'build/nsgroup/fundsavy/resources/images/test/hdfc_bank.png', accCurBal:'RS 12,435'},
      {accName:'SBI Bank',accNo:'653487928323',image:'build/nsgroup/fundsavy/resources/images/test/sbi.jpg', accCurBal:'RS 12,435'},
      {accName:'ICICI Bank',accNo:'69023798238',image:'build/nsgroup/fundsavy/resources/images/test/icici_bank.jpg', accCurBal:'RS 12,435'}

  ]*/}
}