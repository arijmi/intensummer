import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
}
@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit {
  event: Event;

  constructor(private route: ActivatedRoute,   private eventService: EventService) {
    // const eventId = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    // this.loadEventDetails(eventId);
  }
  ngOnInit() {
    const eventId = this.route.snapshot.paramMap.get('id');
    if (eventId) {
      this.eventService.getEventById(+eventId).subscribe(
        (event: Event) => {
          this.event = event;
        },
        (error) => {
          console.error('Event not found', error);
        }
      );
    } else {
      console.error('No event ID provided');
    }
  }

  sendInvitations() {
    if (this.event) {
      console.log('Sending invitations for event:', this.event.title);
    }
  }

  manageInscriptions() {
    if (this.event) {
      console.log('Managing inscriptions for event:', this.event.title);
    }
  }
  // ngOnInit() {
  //   const eventId = this.route.snapshot.paramMap.get('id');
  //   if (eventId) {
  //     const event = this.eventService.getEventById(+eventId);
  //     if (event) {
  //       this.event = event;
  //     } else {
  //       console.error('Event not found');
  //       // Optionnel: redirigez l'utilisateur ou affichez un message d'erreur
  //     }
  //   } else {
  //     console.error('No event ID provided');
  //     // Optionnel: redirigez l'utilisateur ou affichez un message d'erreur
  //   }
  
  

  loadEventDetails(eventId: number) {
    // Load event details from the server or local data
    this.event = { id: eventId, title: 'Match 1', date: '2024-09-01', location: 'Stadium A', description: 'Description 1' };
  }

  // sendInvitations() {
  //   console.log('Sending invitations for event:', this.event.title);
  //   // Logic to send invitations
  // }

  // manageInscriptions() {
  //   console.log('Managing inscriptions for event:', this.event.title);
  //   // Logic to manage inscriptions
  // }
}
