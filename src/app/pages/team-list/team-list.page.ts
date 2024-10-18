import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { Router } from '@angular/router';
import { Team } from '../../models/team.model'; // Importer l'interface Team

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.page.html',
  styleUrls: ['./team-list.page.scss'],
})
export class TeamListPage implements OnInit {
  teams: Team[] = [];  // Utiliser l'interface Team pour typer la variable

  constructor(private teamService: TeamService, private router: Router) {}

  ngOnInit() {
    this.teams = this.teamService.getTeams();
  }

  viewTeamDetails(teamId: number) {
    this.router.navigate(['/team-details', teamId]);
  }

  createNewTeam() {
    this.router.navigate(['/create-team']);
  }
}
