import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TryPage } from './try';

@NgModule({
  declarations: [
    TryPage,
  ],
  imports: [
    IonicPageModule.forChild(TryPage),
  ],
})
export class TryPageModule {}
