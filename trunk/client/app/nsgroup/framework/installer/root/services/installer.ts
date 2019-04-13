/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


export interface Installer 
{
    installerOptions:InstallerOptions;
    initialize(installerOptions:InstallerOptions):void;
    execute():boolean;
}
export class InstallerOptions
{
    configFileName:string;
    stepName:string;
}