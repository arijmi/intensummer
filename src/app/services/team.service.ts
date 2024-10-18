import { Injectable } from '@angular/core';
import { Team } from '../models/team.model'; // Importer l'interface Team
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private api = "http://localhost:86400/api";
  private teams: Team[] = [
    { id: 1, name: 'Team A', members: ['Player 1', 'Player 2'], performance: { wins: 5, losses: 3 } },
    // Ajoutez d'autres équipes ici
  ];

  constructor(private http: HttpClient) {}

  getTeams(): Team[] {
    return this.teams;
  }

  getTeamById(id: number): Observable<Team> {
    return this.http.get<Team>(`${this.api}/${id}/teams`);
  }

  createTeam(name: string, members: string[]) {
    const newTeam: Team = {
      id: this.teams.length + 1,
      name,
      members,
      performance: { wins: 0, losses: 0 },
    };
    this.teams.push(newTeam);
  }

  // Updated method to work asynchronously
  addMemberToTeam(teamId: number, member: string) {
    this.getTeamById(teamId).subscribe((team: Team) => {
      team.members.push(member);
    }, error => {
      console.error('Error adding member to team', error);
    });
  }

  // Updated method to work asynchronously
  trackPerformance(teamId: number, wins: number, losses: number) {
    this.getTeamById(teamId).subscribe((team: Team) => {
      team.performance.wins += wins;
      team.performance.losses += losses;
    }, error => {
      console.error('Error updating team performance', error);
    });
  }
}
