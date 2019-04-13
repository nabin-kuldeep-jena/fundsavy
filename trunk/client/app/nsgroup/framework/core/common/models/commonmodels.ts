/**
 * Created by nabin.jena on 6/11/2016.
 */
export class DataModel
{
    private displyString:string;
    setDisplayString( displyString:string):void
    {
        this.displyString=displyString;
    }
    getDisplayString():string
    {
        return this.displyString;
    }
}

export class SchemaConfigModel extends DataModel
{
    applicationName:string;
    version:string;
    databaseType:string;
    dbName:string;
    newSchemas:Array<string>;
    refDataQuery:Array<string>;
    clearSchemas:Array<string>;
    clearRefDataQuery:Array<string>;
    testSqlQuery:Array<string>;
}