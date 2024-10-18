import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerStatsPageRoutingModule } from './player-stats-routing.module';

import { PlayerStatsPage } from './player-stats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerStatsPageRoutingModule
  ],
  declarations: [PlayerStatsPage]
})
export class PlayerStatsPageModule {}
