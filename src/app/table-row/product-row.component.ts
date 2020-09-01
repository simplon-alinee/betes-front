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

  nextStatus: string;
  editRoute: string;
  games: Game;
  matches: Matches[] = [];

  constructor(private matchesService: MatchesService, private gameService: GameService) {
  }

  ngOnInit() {
    // this.defineNextStatus(this.productStatus);
    this.editRoute = '/edit/product/' + this.matchId;
    this.getAllGames();
    this.getAllMatches();

    console.log(this.getAllGames());
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

  /**
   * Method called when the user click on the delete button
   */
  onDeleteProduct() {
    this.matchesService.deleteProduct(this.matchId);
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
