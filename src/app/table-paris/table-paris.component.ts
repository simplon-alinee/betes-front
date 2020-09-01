import {Component, OnInit} from '@angular/core';
import {MatchesService} from '../services/matches/matches.service';

@Component({
  selector: 'app-table-paris',
  templateUrl: './table-paris.component.html',
  styleUrls: ['./table-paris.component.css']
})
export class TableParisComponent implements OnInit {
  matches: Array<object>;

  constructor(private productsService: MatchesService) {
  }

  ngOnInit() {
    this.matches = this.productsService.matches;
  }

}
