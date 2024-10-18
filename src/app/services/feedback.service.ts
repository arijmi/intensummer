// src/app/services/feedback.service.ts
import { Injectable } from '@angular/core';
import { Feedback } from '../models/feedback.model';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private feedbacks: Feedback[] = [];

  constructor() {}

  addFeedback(feedback: Feedback) {
    this.feedbacks.push(feedback);
  }

  getFeedbacksByMatch(matchId: number): Feedback[] {
    return this.feedbacks.filter(f => f.matchId === matchId);
  }

  getFeedbacksByParticipant(participantId: number): Feedback[] {
    return this.feedbacks.filter(f => f.participantId === participantId);
  }
}
