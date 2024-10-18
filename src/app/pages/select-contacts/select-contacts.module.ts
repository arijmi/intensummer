import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectContactsPageRoutingModule } from './select-contacts-routing.module';

import { SelectContactsPage } from './select-contacts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectContactsPageRoutingModule
  ],
  declarations: [SelectContactsPage]
})
export class SelectContactsPageModule {}
