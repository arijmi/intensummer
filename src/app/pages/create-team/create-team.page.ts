import { Component } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.page.html',
  styleUrls: ['./create-team.page.scss'],
})
export class CreateTeamPage {
  teamName: string;
  members: string[] = [];

  constructor(private teamService: TeamService, private router: Router) {}

  addMember(member: string) {
    if (member) {
      this.members.push(member);
    }
  }

  createTeam() {
    if (this.teamName && this.members.length > 0) {
      this.teamService.createTeam(this.teamName, this.members);
      this.router.navigate(['/team-list']);
    } else {
      alert('Please provide a team name and at least one member.');
    }
  }
}
