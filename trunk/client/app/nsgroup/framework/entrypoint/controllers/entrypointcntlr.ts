import {Platform} from 'ionic-angular';
import {NSClient} from '../../core/common/init/launcher';
import {MessageFactory} from '../../core/message/nsmessage';
import {Http} from '@angular/http';


export class EntrypointController
{
    constructor(platform: Platform,http:Http)
    {
       this.intializeApp(platform,http);
    }
    intializeApp(platform: Platform,http:Http):void
    {

        NSClient.INSTANCE=new NSClient(http);
        NSClient.platform=platform;
        NSClient.message=MessageFactory.getMessageAdapter(NSClient.DEFAULT_TOAST_TYPE,platform);
    }
}

