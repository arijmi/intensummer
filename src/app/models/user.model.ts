// src/app/models/user.model.ts
export interface Match {
    id: number;
    title: string;
    date: string;
    location: string;
  }
  
  export interface Rating {
    matchId: number;
    rating: number;
    comment: string;
  }
  
  export interface UserProfile {
    id: number;
    name: string;
    email: string;
    matches: Match[];
    ratings: Rating[];
  }
  