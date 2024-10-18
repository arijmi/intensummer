import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  latitude?: number;
  longitude?: number;
  type?: string;
}

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {
  events: Event[] = [
    { id: 1, title: 'Match 1', date: '2024-09-01', location: 'Stadium A', description: 'Description 1', latitude: 37.7749, longitude: -122.4194 },
    { id: 2, title: 'Match 2', date: '2024-09-10', location: 'Stadium B', description: 'Description 2', latitude: 34.0522, longitude: -118.2437 },
  ];
  filteredEvents: Event[] = [...this.events];
  filter = {
    date: '',
    location: '',
    type: '',
  };

  private map?: L.Map;

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => this.initializeMap(), 0); // Déclencher l'initialisation après le rendu de l'élément DOM
  }
  
  initializeMap() {
    if (!this.map) {
      // Initialiser la carte avec une vue par défaut
      this.map = L.map('map').setView([37.7749, -122.4194], 10);

      // Utiliser les tuiles Stamen Toner
      L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
      }).addTo(this.map);

      // Ajoutez les marqueurs d'événements après l'initialisation de la carte
      this.addEventMarkers();
    }
  }

  addEventMarkers() {
    if (this.map) { // Vérifie que la carte est initialisée
      this.events.forEach(event => {
        if (event.latitude && event.longitude) {
          L.marker([event.latitude, event.longitude])
            .addTo(this.map!) // Ajoutez `!` pour indiquer que `this.map` n'est pas `undefined`
            .bindPopup(`<b>${event.title}</b><br>${event.location}`)
            .openPopup();
        }
      });
    }
  }

  viewEvent(event: Event) {
    this.router.navigate(['/event-detail', event.id]);
  }

  editEvent(event: Event) {
    this.router.navigate(['/event-create', event.id]);
  }

  deleteEvent(event: Event) {
    this.events = this.events.filter(e => e.id !== event.id);
    this.filteredEvents = [...this.events];
  }

  inviteMember(event: Event) {
    this.router.navigate(['invite-member', event.id]);
  }

  applyFilters() {
    this.filteredEvents = this.events.filter(event => 
      (this.filter.date ? event.date.includes(this.filter.date) : true) &&
      (this.filter.location ? event.location.includes(this.filter.location) : true) &&
      (this.filter.type ? event.type === this.filter.type : true)
    );
  }
}
