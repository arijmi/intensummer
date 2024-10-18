import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../../services/team.service';
import { Team } from '../../models/team.model';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.page.html',
  styleUrls: ['./team-details.page.scss'],
})
export class TeamDetailsPage implements OnInit {
  team: Team | undefined;  // Utilisation de l'interface Team
  newMember: string = '';
  wins: number | undefined; // Déclaration pour les gains
  losses: number | undefined; // Déclaration pour les pertes

  constructor(private route: ActivatedRoute, private teamService: TeamService) {}

  ngOnInit() {
    const teamId = parseInt(this.route.snapshot.paramMap.get('id') || '', 10);
    if (!isNaN(teamId)) {
      this.teamService.getTeamById(teamId).subscribe(
        (team: Team) => {
          this.team = team;
        },
        (error) => {
          console.error('Team not found', error);
        }
      );
    } else {
      console.error('Invalid team ID');
    }
  }

  addMember() {
    if (this.newMember && this.team) {
      this.teamService.addMemberToTeam(this.team.id, this.newMember);
      if (this.team) {
        this.team.members.push(this.newMember); // Mettez à jour l'UI pour afficher le nouveau membre
      }
      this.newMember = '';
    }
  }

  trackPerformance(wins: number, losses: number) {
    if (this.team && wins !== undefined && losses !== undefined) {
      this.teamService.trackPerformance(this.team.id, wins, losses);
      // Mettez à jour les performances dans l'UI si nécessaire
    }
  }
}
