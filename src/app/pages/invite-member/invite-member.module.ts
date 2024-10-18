import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InviteMemberPageRoutingModule } from './invite-member-routing.module';

import { InviteMemberPage } from './invite-member.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InviteMemberPageRoutingModule
  ],
  declarations: [InviteMemberPage]
})
export class InviteMemberPageModule {}
