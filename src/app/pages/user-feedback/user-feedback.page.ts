// src/app/user-feedback/user-feedback.page.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-user-feedback',
  templateUrl: './user-feedback.page.html',
  styleUrls: ['./user-feedback.page.scss'],
})
export class UserFeedbackPage implements OnInit {
  userProfile: any;
  feedbacks: any[] = [];

  constructor(private userService: UserService, private feedbackService: FeedbackService) {}

  ngOnInit() {
    this.userProfile = this.userService.getUserProfile();
    this.feedbacks = this.feedbackService.getFeedbacksByParticipant(this.userProfile.id);
  }
}
