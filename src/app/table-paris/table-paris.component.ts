import {Component, OnInit} from '@angular/core';
import {MatchesService} from '../services/matches/matches.service';
import {Matches} from '../models/matches.model';

@Component({
  selector: 'app-table-paris',
  templateUrl: './table-paris.component.html',
  styleUrls: ['./table-paris.component.css']
})
export class TableParisComponent implements OnInit {
  matches: Matches[] = [];

  constructor(private matchesService: MatchesService) {
  }

  ngOnInit() {
    this.getAllMatches();
  }

  getAllMatches() {
    this.matchesService.getAllMatches()
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
