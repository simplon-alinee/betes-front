import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatchesService} from '../services/matches/matches.service';
import {BetSkeleton} from '../models/BetSkeleton';
import {Bet} from '../models/bet.model';
import {Matches} from '../models/matches.model';
import {BetService} from '../services/bet/bet.service';

@Component({
  selector: 'app-new-bet',
  templateUrl: './new-bet.component.html',
  styleUrls: ['./new-bet.component.css']
})
export class NewBetComponent implements OnInit {
  match: Matches;
  id: string;
  betSket= new BetSkeleton();
  bet: Bet;

  constructor(private route: ActivatedRoute,
              private router: Router, private matchesService: MatchesService, private betService: BetService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getMatch();
  }

  getMatch() {
    this.matchesService.getMatchById(this.id)
      .subscribe(matches => {
        this.match = matches;
        console.log(this.match);
      });
  }

  onSubmit(){

    console.log(this.betSket.betOnTeamId);
    this.betSket.matchId = this.match.id;
    this.betSket.userId = 1;

    this.betService.createBet(this.betSket).subscribe(result => {
      this.betService.newDataAdded.emit('new data added successfully');
    });
  }


}
