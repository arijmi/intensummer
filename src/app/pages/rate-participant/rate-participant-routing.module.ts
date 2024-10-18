import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RateParticipantPage } from './rate-participant.page';

const routes: Routes = [
  {
    path: '',
    component: RateParticipantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RateParticipantPageRoutingModule {}
