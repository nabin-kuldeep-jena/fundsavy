import {Platform} from 'ionic-angular';
import {PlatformType} from '../common/platform/platformtype';

export interface Logger
{
   showDBError(message:string):void;
   showNetworkError(message:string):void;
   showError(message:string):void;
   showDebugError(message:string):void;
}
export class LoggerFactory
{
   static logger : Logger ;
   constructor(){}
   static getLogger(loggerType: LoggerType,platform:Platform): Logger
   {
       if (platform.is(PlatformType[PlatformType.mobileweb]))
       {
            if(this.logger==null)
                this.logger=new NSConsoleLoggerAdapter();
       }
       else
       {
            switch (LoggerType[loggerType])
             {
                case "IONIC":
                   if(this.logger==null)
                         this.logger=new NSConsoleLoggerAdapter();
                       break;
                case "NATIVE":
                 if(this.logger==null)
                         this.logger=new NSConsoleLoggerAdapter();
                 break;    
                 case "CONSOLE":
                 if(this.logger==null)
                       this.logger=new NSConsoleLoggerAdapter();
                 break;    
             }
             return this.logger;
            }
    }
}

export class NSConsoleLoggerAdapter implements Logger
{
   showDBError(message:string)
   {
     console.log(message);
   }
    showNetworkError(message:string)
    {
    console.log(message);
    }
    showDebugError(message:string) 
    {
      console.log(message);
    }
    showError(message:string)
    {
        console.log(message);
    }
}
export enum LoggerType
{
  CONSOLE,IONIC,NATIVE 
}
