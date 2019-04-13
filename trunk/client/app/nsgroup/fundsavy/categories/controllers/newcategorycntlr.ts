import {Component} from '@angular/core';
import {NavController, Toast} from 'ionic-angular';
import {DataSourcePool} from "../../../framework/database/datasource";
import {DataSource} from "../../../framework/database/datasource";

@Component({
    templateUrl: 'build/nsgroup/fundsavy/categories/views/newcategory.html'
})

export class NewCategoryController
{
    catName:String;
    catPath:String;
    catType:String;
    nav:NavController;
    dataSource: DataSource;
    constructor(nav : NavController){
        this.nav=nav;
        this.dataSource=DataSourcePool.getDatasource();
        this.catType="Credit";
    }

    saveCategoryDetails():void
    {
            this.dataSource.query("insert into image_tbl(img_name,img_path) values ('"+this.catName+"','"+this.catPath+"') ").then((data)=> {
                console.log("INSERT ID -> " + data.res.insertId);
                this.dataSource.query("insert into category_tbl(cat_name,cat_type,img_id) values ('"+this.catName+"','"+this.catType+"',"+data.res.insertId+") ").then((data)=> {
                    this.nav.pop();
                }, function (err) {
                    console.error(err);
                });
            }, function (err) {
                console.error(err);
            });

    }
}