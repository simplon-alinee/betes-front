import {Component, Input, OnInit} from '@angular/core';
import {MatchesService} from '../services/matches/matches.service';
import {GameService} from '../services/game/game.service';
import {Game} from '../models/game.model';
import {Matches} from '../models/matches.model';

// This lets me use jquery
declare var $: any;

@Component({
  selector: '[app-product-row]',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {

  @Input() matchId;
  @Input() matchName;
  @Input() team1;
  @Input() team2;
  @Input() matchDate;
  @Input() teamResult;
  @Input() bet;
  @Input() index;
  @Input() indexBet;

  editUrl: string;
  nextStatus: string;
  editRoute: string;
  games: Game;
  matches: Matches[] = [];

  constructor(private matchesService: MatchesService, private gameService: GameService) {
  }

  ngOnInit() {
    // this.defineNextStatus(this.productStatus);
    this.getAllGames();
    this.getAllMatches();
    this.editUrl = '/game/edit/' + this.matchId;
    console.log(this.indexBet);
  }

  showModal(): void {
    $('#myModal').modal('show');
  }

  sendModal(): void {
    //do something here
    this.hideModal();
  }

  hideModal(): void {
    document.getElementById('close-modal').click();
  }

  getAllGames() {
    this.gameService.getGames()
      .subscribe(games => {
        this.games = games;
      });
  }

  getAllMatches() {
    this.matchesService.getAllMatches()
      .subscribe(matches => {
        this.matches = matches;
      });
  }


}
