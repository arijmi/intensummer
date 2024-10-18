import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InviteMemberPage } from './invite-member.page';

const routes: Routes = [
  {
    path: '',
    component: InviteMemberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InviteMemberPageRoutingModule {}
