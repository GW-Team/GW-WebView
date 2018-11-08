import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions ,InAppBrowserEvent } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  //template: "<p>....loading</p>"
})
export class HomePage {

  url: string;

  constructor(public navCtrl: NavController,private inAppBrowser : InAppBrowser,platform: Platform) {  
    platform.ready().then(() =>{
      
      const options: InAppBrowserOptions = {
        zoom: 'no',
        location: 'no',
        hardwareback: 'yes',
        hideurlbar: 'yes',
        hidenavigationbuttons: 'yes',
        enableViewportScale: 'no',
        fullscreen: 'yes'
      }
      /*
      let browser = this.inAppBrowser.create('https://gowhere-0107402.appspot.com/users/sign_in','_self',options)

      browser.on('exit').subscribe((event: InAppBrowserEvent) => {
        platform.exitApp();
      });

      browser.show();
      */
    });

    //this.openWebpage("https://ionicframework.com/docs/native/in-app-browser/")
  }

  
  /*
  openWebpage(url: string){

    const options: InAppBrowserOptions = {
      zoom: 'no',
      location: 'no'
    }

    const browser = this.inAppBrowser.create(url, '_self',);
  }
  */


}
