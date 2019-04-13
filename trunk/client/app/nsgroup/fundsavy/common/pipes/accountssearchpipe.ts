import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: "searchAccounts"  
})

export class AccountsSearchPipe implements PipeTransform{
    transform(value: any,args: string[]) : any
    {
        let searchValue = args[0].toLocaleLowerCase;
        //return value.filter((account)=>account.accName.startsWith(searchValue));
       // if(searchQuery.trim.length==0)
         //   return "";
        //else
            return searchValue?value.filter(account=>account.accName.toLocaleLowerCase().indexOf(searchValue)!=-1):value;
        //return value;
    }
}