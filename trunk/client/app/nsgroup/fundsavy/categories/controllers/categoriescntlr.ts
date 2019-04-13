/**
 * Created by nabin.jena on 8/2/2016.
 */
import {NavController,Modal} from 'ionic-angular';
import {Component} from "@angular/core";
import {DataSource} from "../../../framework/database/datasource";
import {DataSourcePool} from "../../../framework/database/datasource";
import {NSSideMenu} from "../../../framework/module/menu/controller/nssidemenucntlr";
import {NewCategoryController} from "./newcategorycntlr";


@Component({
    templateUrl: 'build/nsgroup/fundsavy/categories/views/categories.html',
    directives: [NSSideMenu],
})

export class CategoriesController
{
    categories:any;
    nav:NavController;
    dataSource:DataSource;
    constructor(nav : NavController){
        this.nav=nav;
        this.dataSource=DataSourcePool.getDatasource();
        this.categories=new Array<Object>();
    }
    ngOnInit() {
        this.dataSource.query("select a.cat_id,a.cat_name,b.img_name,b.img_path from category_tbl a INNER JOIN image_tbl b ON a.img_id=b.img_id").then((data)=> {
            if (data.res.rows.length > 0) {
                for (var i = 0; i < data.res.rows.length; i++) {
                    this.categories.push({
                        catId: data.res.rows.item(i).cat_id,
                        catName: data.res.rows.item(i).cat_name,
                        iconName: data.res.rows.item(i).img_path+data.res.rows.item(i).img_name,
                    });
                }
            }
            return  this.categories;
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
        });
    }

    onCategoryAdd():void
    {
            this.nav.push(NewCategoryController);
    }

}
