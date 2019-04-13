import {Installer,InstallerOptions} from '../../root/services/installer'
import {NSConfigReader} from "../../../core/common/init/configreader";
import {NSClient} from "../../../core/common/init/launcher";
import {SchemaConfigModel} from "../../../core/common/models/commonmodels";
import {DataSourcePool} from "../../../database/datasource";
import {DataSource} from "../../../database/datasource";

export class DbInstallerService implements Installer 
{
    installerOptions:InstallerOptions;
    schemaConfigModel:SchemaConfigModel;
    dataSource:DataSource;
    initialize(installerOptions:InstallerOptions):boolean
    {
        this.installerOptions=installerOptions;
        this.schemaConfigModel=NSClient.config.getSchemaConfig();
        this.dataSource=DataSourcePool.getDatasource();
        return true;
    }
    execute(): boolean
    {
        this.clearSchemas();
        this.buildNewSchemas();
        this.clearRefDataQuery();
        this.populateRefDataQuery();
        this.testSqlQuery();
        return true;
    }
    clearSchemas():void
    {
        for(var query of this.schemaConfigModel.clearSchemas)
            this.dataSource.query(query);
    }
    buildNewSchemas():void
    {
        for(var query of this.schemaConfigModel.newSchemas)
            this.dataSource.query(query);
    }
    clearRefDataQuery():void
    {
        for(var query of this.schemaConfigModel.clearRefDataQuery)
            this.dataSource.query(query);
    }
    populateRefDataQuery():void
    {
        for(var query of this.schemaConfigModel.refDataQuery)
            this.dataSource.query(query);
    }
    testSqlQuery():void
    {
        for(var query of this.schemaConfigModel.testSqlQuery)
                this.dataSource.query(query);
    }
}