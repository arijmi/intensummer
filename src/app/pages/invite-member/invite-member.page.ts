import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../services/event.service'; // Utilisez EventService au lieu de TeamService
import { Event } from '../../models/event.model'; // Assurez-vous que l'interface Event est importée

@Component({
  selector: 'app-invite-member',
  templateUrl: './invite-member.page.html',
  styleUrls: ['./invite-member.page.scss'],
})
export class InviteMemberPage implements OnInit {
  email: string = '';
  event: Event | undefined;

  constructor(private route: ActivatedRoute, private eventService: EventService) {}

  // ngOnInit() {
  //   const eventId = parseInt(this.route.snapshot.paramMap.get('id') || '', 10);
  //   if (!isNaN(eventId)) {
  //     this.event = this.eventService.getEventById(eventId);
  //   } else {
  //     // Gérer le cas où l'ID est invalide ou non trouvé
  //     console.error('Invalid event ID');
  //   }
  // }
  ngOnInit() {
    const eventId = parseInt(this.route.snapshot.paramMap.get('id') || '', 10);
    if (!isNaN(eventId)) {
      this.eventService.getEventById(eventId).subscribe(
        (event: Event) => {
          this.event = event;
        },
        (error) => {
          console.error('Event not found', error);
        }
      );
    } else {
      console.error('Invalid event ID');
    }
  }
  sendInvitation() {
    if (this.email && this.event) {
      // Logique pour envoyer l'invitation par email ou via une notification push
      alert(`Invitation sent to ${this.email} to join ${this.event.title}`);
      this.email = '';
    }
  }
}
