import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { User } from 'firebase/auth';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {



  constructor(
    private router: Router,
    private navCtrl: NavController
  ) {}

  ngOnInit(): void {}

  goToEvent() {
    this.router.navigate(['/event-list']);
  }

  goToProfile() {
    this.router.navigate(['/user-profile']);
  }

  goToJournals() {
    this.router.navigate(['/journals']);
  }

 
 
}
