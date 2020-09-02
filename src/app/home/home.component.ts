import {Component, OnInit} from '@angular/core';
import {MatchesService} from '../services/matches/matches.service';
import {Game} from '../models/game.model';
import {GameService} from '../services/game/game.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  gameList: Game[];

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.gameService.getGames().subscribe(games => {
      this.gameList = games.content;
      console.log(this.gameList);
    });
  }

}
