import {Toast as nativeToast} from 'ionic-native';
import {Toast as ionicToast,Platform} from 'ionic-angular';
import {PlatformType} from '../common/platform/platformtype';

export interface Message
{
   
   showErrorMessage(message:string):void;
   showSuccessMessage(message:string):void;
   showFailureMessage(message:string):void;
}
export class IonicToastMessageAdapter implements Message 
{
    DEFAULT_DURATION:number=3000;
    constructor()
    {
    }
     
    showErrorMessage(message:string)
    {
        ionicToast.create({ "message": message,"duration":this.DEFAULT_DURATION,"dismissOnPageChange":true})
    }
    showSuccessMessage(message:string)
    {
        ionicToast.create({ "message": message,"duration":this.DEFAULT_DURATION,"dismissOnPageChange":true})
    }
    showFailureMessage(message:string)
    {
        ionicToast.create({ "message": message,"duration":this.DEFAULT_DURATION,"dismissOnPageChange":true})
    }
}

export class CrodovaToastMessageAdapter implements Message 
{
    constructor()
    {
    }
     
    showErrorMessage(message:string)
    {
        nativeToast.show(message,'long', 'bottom');
    }
    showSuccessMessage(message:string)
    {
         nativeToast.show(message,'long', 'bottom');
    }
    showFailureMessage(message:string)
    {
         nativeToast.show(message,'long', 'bottom');
    }
}

export class ConsoleToastMessageAdapter implements Message 
{
    constructor()
    {
    }
    static getInstance():ConsoleToastMessageAdapter
    {
        return new ConsoleToastMessageAdapter();
    }
    showErrorMessage(message:string)
    {
        alert(message);
    }
    showSuccessMessage(message:string)
    {
         alert(message);
    }
    showFailureMessage(message:string)
    {
         alert(message);
    }
}
export enum ToastType
{
    IONIC = <any>"IONIC",
    NATIVE = <any>"NATIVE",
}
export class MessageFactory
{
  static toastMessage : Message ;
   constructor(){}
   static getMessageAdapter(toastType: ToastType,platform:Platform): Message
   {
       if (platform.is(PlatformType[PlatformType.mobileweb]))
       {
            if(this.toastMessage==null)
                this.toastMessage=new ConsoleToastMessageAdapter();
       }
       else
       {
            switch (ToastType[ToastType.IONIC])
             {
                case "IONIC":
                   if(this.toastMessage==null)
                         this.toastMessage=new IonicToastMessageAdapter();
                       break;
                case "NATIVE":
                 if(this.toastMessage==null)
                         this.toastMessage=new IonicToastMessageAdapter();
                 break;    
             }
             return this.toastMessage;
            }
    }
}