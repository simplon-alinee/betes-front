import {Component, Input, OnInit} from '@angular/core';
import {MatchesService} from '../services/matches/matches.service';
import {Matches} from '../models/matches.model';
import {Game} from '../models/game.model';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-table-paris',
  templateUrl: './table-paris.component.html',
  styleUrls: ['./table-paris.component.css']
})
export class TableParisComponent implements OnInit {
  matches: Matches[] = [];
  gameId: string;
  // @Input() game: Game;

  constructor(private matchesService: MatchesService , private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.gameId = this.route.snapshot.params.gameId;
    if (this.gameId !== null) {
      this.getAllMatchesByGame(this.gameId);
    } else {
      this.getAllMatches();
    }
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

/*  setWinner() {
    for (let i = 0; i < this.matches.length; i++) {
      if (this.matches[i].winner === null) {
        this.matches[i].winner = '----';
      }
    }
  }*/

}
