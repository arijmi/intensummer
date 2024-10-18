import { Component, OnInit } from '@angular/core';
interface Player {
  name: string;
  position: string;
  image: string;
  matchesPlayed: number;
  goalsScored: number;
  assists: number;
  yellowCards: number;
  redCards: number;
}
@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.page.html',
  styleUrls: ['./player-stats.page.scss'],
})
export class PlayerStatsPage implements OnInit {

  players: Player[] = [];

  constructor() {}

  ngOnInit() {
    this.players = [
      {
        name: 'Player 1',
        position: 'Forward',
        image: 'assets/players/player1.jpg',
        matchesPlayed: 20,
        goalsScored: 15,
        assists: 5,
        yellowCards: 2,
        redCards: 0,
      },
      {
        name: 'Player 2',
        position: 'Midfielder',
        image: 'assets/players/player2.jpg',
        matchesPlayed: 18,
        goalsScored: 8,
        assists: 7,
        yellowCards: 3,
        redCards: 1,
      },
      // Ajouter plus de joueurs ici
    ];
  }
}
