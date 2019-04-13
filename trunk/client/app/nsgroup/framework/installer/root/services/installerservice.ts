import {Installer} from './installer'
import {DbInstallerService} from "../../database/services/dbinstallerservice";
import {InstallerOptions} from "./installer";
export class RootInstallerService implements Installer
{
    installerOptions:InstallerOptions;
    installerSteps:Installer[];
    constructor()
    {
        this.installerSteps=[new DbInstallerService() ];
    }
    initialize(installerOptions:InstallerOptions)
    {
        this.installerOptions=installerOptions;
        for(var installerStep of  this.installerSteps)
            installerStep.initialize(installerStep.installerOptions);
    }
    execute(): boolean
    {
        for(var installerStep of this.installerSteps)
            installerStep.execute();
        return true;
    }
}