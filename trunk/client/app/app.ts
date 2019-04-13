import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {Http} from "../node_modules/@angular/http/src/http";
import {FundSavyEntryPointController} from './nsgroup/fundsavy/entrypoint/entrypointcntlr';
import {NSConfigReader} from "./nsgroup/framework/core/common/init/configreader";
import {NSClient} from "./nsgroup/framework/core/common/init/launcher";
import {NSControllerFactory} from "./nsgroup/framework/core/common/init/controllerregistery";
import {FundSavyControllerRegistery} from "./nsgroup/fundsavy/common/init/controllerregistery";
import {RootInstallerService} from "./nsgroup/framework/installer/root/services/installerservice";


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [NSConfigReader]
})
export class NSApp
{
  rootPage: any = FundSavyEntryPointController;
  static get parameters() {
    return [[Platform],[Http],[NSConfigReader]];
  }

  constructor(platform,http:Http,configreader:NSConfigReader)
  {
    NSClient.config = configreader;
    configreader.load().then();
    console.log(configreader.getMenuConfig());
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });

   NSControllerFactory.register(new FundSavyControllerRegistery());
  }
}
ionicBootstrap(NSApp);
