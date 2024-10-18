// src/app/user-profile/user-profile.page.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserProfile } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  userProfile!: UserProfile;
  editMode = false;
  newName: string = '';  
  newEmail: string = ''; 

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userProfile = this.userService.getUserProfile();
    this.newName = this.userProfile.name;
    this.newEmail = this.userProfile.email;
  }

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  saveChanges() {
    if (this.newName && this.newEmail) { // Assurez-vous que newName et newEmail ne sont pas vides
      this.userService.updateUserProfile({
        name: this.newName,
        email: this.newEmail,
      });
      this.toggleEdit();
    }
  }
}
