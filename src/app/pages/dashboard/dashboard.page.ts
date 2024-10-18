import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private router: Router, private menuCtrl: MenuController) { }

  ngOnInit() { this.menuCtrl.close();}

  // Méthode pour naviguer vers la page Profile
  goToProfile() {
    console.log('Navigating to profile...');
    this.router.navigate(['/user-profile']);
  }

  // Méthode pour naviguer vers la page Journals
  goToJournals() {
    this.router.navigate(['/journals']);
  }

 
  goToEvent(){
    this.router.navigate(['/event-list']);
  }
  goToTeam(){
    this.router.navigate(['/team-list']);
  }
}
