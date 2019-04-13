/**
 * Created by nabin.jena on 6/8/2016.
 */
import {Storage, SqlStorage} from 'ionic-angular';
import { Inject } from '@angular/core';
import {Http, Response} from '@angular/http';
import {NSClient} from "../core/common/init/launcher";
import {SchemaConfigModel} from "../core/common/models/commonmodels";

export enum DataSourceType
{
    SQLITE,LOCALSTORAGE,INDEXDB,WEBSQL,SESSIONSTORAGE,COUCHDB,POUCHDB
}
export interface DataSource
{
    query(queryString:string):any;
}
export class DataSourcePool
{
    static datsouce:DataSource;
    static getDatasource():DataSource
    {
         if(this.datsouce==null)
               this.datsouce=NSSQLiteStorageAdapter.getInstance();
        return this.datsouce;
    }
}

export class NSSQLiteStorageAdapter implements DataSource
{
    private static instance:NSSQLiteStorageAdapter;
    private static isCreating:Boolean = false;
    storage:Storage;
    http:Http;
    schemaConfig:SchemaConfigModel;
    static get parameters() {
        return [[Http]];
    }
    constructor()
    {
        if (!NSSQLiteStorageAdapter.isCreating)
        {
            throw new Error("You can't call new in Singleton instances!");
        }
        this.schemaConfig=NSClient.config.getSchemaConfig();
        this.initStorage();
    }
    static getInstance() {
        if (NSSQLiteStorageAdapter.instance == null)
        {
            NSSQLiteStorageAdapter.isCreating = true;
            NSSQLiteStorageAdapter.instance = new NSSQLiteStorageAdapter();
            NSSQLiteStorageAdapter.isCreating = false;
        }
        return NSSQLiteStorageAdapter.instance;
    }
    query(queryString:string):any
    {
       return this.storage.query(queryString);
    }
    private initStorage():void
    {
       this.storage=new Storage(SqlStorage,{name: this.schemaConfig.dbName, location: 'default'});
    }
}