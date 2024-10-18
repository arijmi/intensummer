// src/app/models/event.model.ts
export interface Event {
    id: number;
    title: string;
    date: string;
    location: string;
    description: string;
    latitude?: number;
    longitude?: number;
    type?: string;
  }
  