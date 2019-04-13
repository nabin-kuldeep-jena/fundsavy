import {Component} from '@angular/core';
import {NavController, Toast} from 'ionic-angular';

@Component({
    templateUrl: 'build/nsgroup/fundsavy/accounts/views/accountnew.html'
})

export class AccountNewController{
constructor(public nav: NavController)
{
    
}    
presentToast(){
    let toast = Toast.create({
      message: 'Account Saved',
      duration: 2000,
      position: 'bottom'
    });

    this.nav.present(toast);
}
 ngOnDestroy()
 {
    this.presentToast();
 }
}