import {Component, Input, OnInit} from '@angular/core';
import {MatchesService} from '../services/matches/matches.service';
import {Matches} from '../models/matches.model';
import {Game} from '../models/game.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {BetService} from '../services/bet/bet.service';
import {Bet} from '../models/bet.model';

@Component({
  selector: 'app-table-paris',
  templateUrl: './table-paris.component.html',
  styleUrls: ['./table-paris.component.css']
})
export class TableParisComponent implements OnInit {
  matches: Matches[] = [];
  bets: Bet[] = [];
  gameId: string;

  // @Input() game: Game;

  constructor(private matchesService: MatchesService, private route: ActivatedRoute, private betService: BetService) {
  }

  ngOnInit() {
    this.gameId = this.route.snapshot.params.gameId;
    if (this.gameId !== null) {
      this.getAllMatchesByGame(this.gameId);
    } else {
      this.getAllMatches();
    }
    this.getAllBets();
  }


  getAllMatches() {
    this.matchesService.getAllMatches()
      .subscribe(matches => {
        this.matches = matches.content;
      });
  }

  getAllMatchesByGame(gameId: string) {
    this.matchesService.getAllMatchesByGame(gameId)
      .subscribe(matches => {
        this.matches = matches.content;

      });
  }

  getAllBets() {
    this.betService.getAllBets()
      .subscribe(bets => {
        this.bets = bets.content;
        console.log(this.bets);

      });
  }

  /*  setWinner() {
      for (let i = 0; i < this.matches.length; i++) {
        if (this.matches[i].winner === null) {
          this.matches[i].winner = '----';
        }
      }
    }*/

}
