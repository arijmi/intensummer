import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  userProfile: { name: string; description: string } = {
    name: '',
    description: '',
  };

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private menuCtrl: MenuController
  ) {}

  ngOnInit(): void {
    this.authService.getProfile().then(user => {
      if (user) {
        this.userProfile.name = user.displayName || 'User Name';
        this.userProfile.description = 'Joueur 1'; // Remplacez cela par la vraie description de l'utilisateur
        console.log('User profile loaded:', this.userProfile);
      }
    }).catch(error => {
      console.error('Error getting user profile:', error);
    });
  }

  goToProfile() {
    console.log('Navigating to profile...');
    this.router.navigate(['/profile']);
  }

  updateProfile(name: string, description: string) {
    this.userProfile.name = name;
    this.userProfile.description = description;
    this.menuCtrl.close(); // Ferme le menu après la mise à jour
  }

  signOut() {
    this.authService.signOut().then(() => {
      this.router.navigate(['/landing']);
    });
  }
}
