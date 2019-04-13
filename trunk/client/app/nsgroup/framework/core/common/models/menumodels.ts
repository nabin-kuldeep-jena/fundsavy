import {DataModel} from "./commonmodels";
/**
 * Created by nabin.jena on 6/12/2016.
 */
export class SideMenuConfigModel extends DataModel
{
    menuTitle:string;
    isMultipleAlow:boolean;
    menuItems:Array<MenuItem>;
}
export class MenuItem
{
    name:string;
    componentName:string;
    icon:string;
    subMenuItems:Array<SubMenuItem>;
    rightIcon:string;
}
export class SubMenuItem
{
    name:string;
    componentName:string;
    icon:string;
    rightIcon:string;
}