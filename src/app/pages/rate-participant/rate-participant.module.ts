import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RateParticipantPageRoutingModule } from './rate-participant-routing.module';

import { RateParticipantPage } from './rate-participant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RateParticipantPageRoutingModule
  ],
  declarations: [RateParticipantPage]
})
export class RateParticipantPageModule {}
