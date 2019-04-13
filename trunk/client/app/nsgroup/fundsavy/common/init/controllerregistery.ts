/**
 * Created by nabin.jena on 7/8/2016.
 */
import {EntrypointController} from "../../../framework/entrypoint/controllers/entrypointcntlr";
import {NSControllerRegistery} from "../../../framework/core/common/init/controllerregistery";
import {AllAccountsController} from "../../accounts/controllers/allaccountscntlr";
export class FundSavyControllerRegistery extends NSControllerRegistery
{
    public getController(actionName:string):any
    {
        if(actionName=="AllAccountsController")
            return AllAccountsController;
        return EntrypointController;
    }
}