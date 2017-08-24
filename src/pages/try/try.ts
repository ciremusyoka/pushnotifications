import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController } from 'ionic-angular';

/**
 * Generated class for the TryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-try',
  templateUrl: 'try.html',
})
export class TryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TryPage');
  }

openPopover(myEvent) {
    let popover = this.popoverCtrl.create("TrypopoverPage");
    popover.present({
      ev: myEvent
    });
    popover.onDidDismiss(data=>{
      if(data){
        this.navCtrl.push(data);
      }
    })
  }
}
