import { Component, OnInit } from '@angular/core';
import {Bet} from '../models/bet.model';
import {ActivatedRoute} from '@angular/router';
import {BetService} from '../services/bet/bet.service';

@Component({
  selector: 'app-my-bets',
  templateUrl: './my-bets.component.html',
  styleUrls: ['./my-bets.component.css']
})
export class MyBetsComponent implements OnInit {
  bets: Bet[] = [];
  constructor(private route: ActivatedRoute, private betService: BetService) { }

  ngOnInit() {
    this.getAllBets();
  }

  getAllBets() {
    this.betService.getAllBets()
      .subscribe(bets => {
        this.bets = bets.content;
        console.log(this.bets);

      });
  }
}
