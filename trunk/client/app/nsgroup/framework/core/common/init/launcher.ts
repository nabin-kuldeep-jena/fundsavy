import {Platform} from 'ionic-angular';
import {Message,ToastType} from '../../message/nsmessage';
import {Logger} from '../../logger/nslogger';
import {Http,HTTP_PROVIDERS, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Json} from "../../../../../../node_modules/@angular/core/src/facade/lang";
import {SchemaConfigModel} from "../models/commonmodels";
import {DataSourcePool} from "../../../database/datasource";
import {NSConfigReader} from "./configreader";

export class NSClient
{
    static DEFAULT_TOAST_TYPE = ToastType.NATIVE;
    static platform:Platform;
    static logger:Logger;
    static message:Message;
    static http:Http;
    static  INSTANCE:NSClient;
    static config:NSConfigReader;



    constructor(http:Http)
    {
        NSClient.http=http;
    }
}
