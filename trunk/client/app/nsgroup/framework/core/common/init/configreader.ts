import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import  {SchemaConfigModel} from '../models/commonmodels';
import {SideMenuConfigModel} from "../models/menumodels";


@Injectable()
export class NSConfigReader
{
    private _nsRootConfig: Object
    private schemaConfig:SchemaConfigModel;
    private menuConfig:SideMenuConfigModel;
    constructor(private http: Http)
    {
        this.load();
    }
    load()
    {

        return new Promise((resolve, reject) => {
            this.http.get('build/nsgroup/ns-root-config.json')
            .map(res => res.json())
                .subscribe((env_data) => {
                    this._nsRootConfig = env_data;

                    //loadSchemaFile
                    this.loadSchemaFile();
                    this.loadMenuConfigFile();
                    resolve(env_data);
                });
        });

    }
    loadSchemaFile()
    {
        this.http.get(this._nsRootConfig["schemaFilePath"])
            .map(res => res.json())
            .catch((error: any) => {
                console.error(error);
                return Observable.throw(error.json().error || ' Failed to read schema file');
            })
            .subscribe((data) => {
                this.schemaConfig = data;
            });
    }
    loadMenuConfigFile()
    {
        this.http.get(this._nsRootConfig["menuFilePath"])
            .map(res => res.json())
            .catch((error: any) => {
                console.error(error);
                return Observable.throw(error.json().error || ' Failed to read schema file');
            })
            .subscribe((data) => {
                this.menuConfig = data;
                // resolve(true);
            });
    }
    public get(key: any)
   {
        return this._nsRootConfig[key];
   }
    public getSchemaConfig():SchemaConfigModel
    {
        return this.schemaConfig;
    }
    getMenuConfig():SideMenuConfigModel
    {
        return this.menuConfig;
    }
}