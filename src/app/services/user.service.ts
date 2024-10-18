// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { UserProfile } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userProfile: UserProfile = {
    id: 1,
    name: 'Marc',
    email: 'marc@example.com',
    matches: [
      { id: 1, title: 'Match 1', date: '2024-09-01', location: 'Stadium A' },
      { id: 2, title: 'Match 2', date: '2024-09-10', location: 'Stadium B' },
    ],
    ratings: [
      { matchId: 1, rating: 5, comment: 'Great match!' },
      { matchId: 2, rating: 4, comment: 'Good performance.' },
    ],
  };

  getUserProfile(): UserProfile {
    return this.userProfile;
  }

  updateUserProfile(profile: Partial<UserProfile>): void {
    this.userProfile = { ...this.userProfile, ...profile };
  }
}
