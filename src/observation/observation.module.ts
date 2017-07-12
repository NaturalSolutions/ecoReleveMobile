import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObservationPage } from './observation';

@NgModule({
  declarations: [
    ObservationPage,
  ],
  imports: [
    IonicPageModule.forChild(ObservationPage),
  ],
  exports: [
    ObservationPage
  ]
})
export class ObservationPageModule {}
