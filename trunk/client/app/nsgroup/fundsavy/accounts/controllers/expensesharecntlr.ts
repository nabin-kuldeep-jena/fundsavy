import {Component} from '@angular/core';
import {Contacts} from 'ionic-native';

@Component({
    templateUrl: 'build/nsgroup/fundsavy/accounts/views/expenseshare.html'
})

export class ExpenseShareController{
    public contacttobefound;
    public contactsfound;
    public search;
constructor()
{
    console.log("In expense constructor");
    this.contacttobefound = '';
    this.contactsfound = [];
    this.search = false;
}    

findfn(val) {
      Contacts.find(['*'], {filter: val}).then((contacts) => {
          this.contactsfound = contacts;
          //alert(JSON.stringify(contacts[0]));
      })
      
      if(this.contactsfound.length == 0)
      this.contactsfound.push({displayName: 'No Contacts found'});  
      this.search = true;    
  }
}