import {Component, OnInit} from '@angular/core';
import {MatchesService} from '../services/matches/matches.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  matches: Array<object>;

  constructor(private matchesService: MatchesService) {
  }

  ngOnInit() {
    this.matches = this.matchesService.matches;
  }
}
