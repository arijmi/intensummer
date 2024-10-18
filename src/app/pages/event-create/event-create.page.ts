import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

interface Event {
  id?: number;
  title: string;
  date: string;
  location: string;
  description: string;
  visibility: string; 
}

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.page.html',
  styleUrls: ['./event-create.page.scss'],
})
export class EventCreatePage {

  event: Event = { title: '', date: new Date().toISOString(), location: '', description: '', visibility: 'public' }; // Valeur par défaut ajoutée

  constructor(private router: Router, private route: ActivatedRoute) {
    const eventId = this.route.snapshot.paramMap.get('id');
    if (eventId) {
  
      this.loadEventDetails(parseInt(eventId, 10));
    }
  }

  loadEventDetails(eventId: number) {
  
    const existingEvent = { id: eventId, title: 'Match 1', date: '2024-09-01', location: 'Stadium A', description: 'Description 1', visibility: 'private' };
    this.event = existingEvent;
  }

  saveEvent() {
    if (this.event.id) {
      // Update the event
      console.log('Updating event:', this.event);
    } else {
      // Create a new event
      console.log('Creating event:', this.event);
    }
    this.router.navigate(['/event-list']);
  }
}
