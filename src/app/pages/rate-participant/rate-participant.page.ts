// src/app/rate-participant/rate-participant.page.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-rate-participant',
  templateUrl: './rate-participant.page.html',
  styleUrls: ['./rate-participant.page.scss'],
})
export class RateParticipantPage implements OnInit {
  matchId: number = 0;
  participantId: number = 0;
  rating: number = 0;
  comment: string = '';

  constructor(private route: ActivatedRoute, private feedbackService: FeedbackService) {}

  ngOnInit() {
    const matchIdParam = this.route.snapshot.paramMap.get('matchId');
    const participantIdParam = this.route.snapshot.paramMap.get('participantId');
    
    // Convert parameters to numbers and handle potential NaN values
    this.matchId = matchIdParam ? parseInt(matchIdParam, 10) : 0;
    this.participantId = participantIdParam ? parseInt(participantIdParam, 10) : 0;
  }

  submitFeedback() {
    if (this.rating > 0) {
      this.feedbackService.addFeedback({
        matchId: this.matchId,
        participantId: this.participantId,
        rating: this.rating,
        comment: this.comment,
      });
      alert('Feedback submitted!');
      this.rating = 0;
      this.comment = '';
    } else {
      alert('Please provide a rating.');
    }
  }
}
