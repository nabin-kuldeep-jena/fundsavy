/**
 * Created by nabin.jena on 6/12/2016.
 */
import {EntrypointController} from "../../../entrypoint/controllers/entrypointcntlr";

export class NSControllerFactory
{
    private static nsControllerRegistery : NSControllerRegistery;

    public static getController(controllerName:string):any
    {
       return  this.nsControllerRegistery.getController(controllerName);
    }
    public static register(nsControllerRegistery:NSControllerRegistery):void
    {
        if(this.nsControllerRegistery==null)
            this.nsControllerRegistery=nsControllerRegistery;
    }
}

export class NSControllerRegistery
{
     public getController(actionName:string):any
    {
        return EntrypointController;
    }
}