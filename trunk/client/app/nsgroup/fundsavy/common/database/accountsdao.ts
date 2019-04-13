import {DataSource} from "../../../framework/database/datasource";
import {DataSourcePool} from "../../../framework/database/datasource";
/**
 * Created by nabin.jena on 7/16/2016.
 */
export class AccountDAO
{
    private static instance:AccountDAO;
    private static isCreating:Boolean = false;
    private dataSource:DataSource;
    constructor()
    {
        if (!AccountDAO.isCreating)
        {
            throw new Error("You can't call new in Singleton instances!");
        }
        this.dataSource=DataSourcePool.getDatasource();
    }
    static getInstance() {
        if (AccountDAO.instance == null)
        {
            AccountDAO.isCreating = true;
            AccountDAO.instance = new AccountDAO();
            AccountDAO.isCreating = false;
        }
        return AccountDAO.instance;
    }
    getAllAccounts():any
    {
        this.dataSource.query("select * from account_tbl").then((data)=> {
            if (data.res.rows.length > 0) {
                var allacounts = new Array<Object>();
                for (var i = 0; i < data.res.rows.length; i++) {
                    allacounts.push({
                        accId: data.res.rows.item(i).acc_id,
                        accNo: data.res.rows.item(i).acc_number,
                        accName: data.res.rows.item(i).acc_name,
                        accType: data.res.rows.item(i).acc_type,
                        accStatus: data.res.rows.item(i).acc_status,
                        accDetails: data.res.rows.item(i).acc_details,
                        image: data.res.rows.item(i).img_path });
                }
            }
            return allacounts;
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
        });
    }
}
