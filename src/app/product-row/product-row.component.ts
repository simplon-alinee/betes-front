import {Component, Input, OnInit} from '@angular/core';
import {MatchesService} from '../services/matches/matches.service';
import {GameService} from '../services/game/game.service';
import {Game} from '../models/game.model';

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
  @Input() matchStatus;
  @Input() matchDate;
  @Input() equipeResult;
  @Input() index;

  nextStatus: string;
  editRoute: string;
  games: Game[];

  constructor(private matchesService: MatchesService, private gameService: GameService) {
  }

  ngOnInit() {
    // this.defineNextStatus(this.productStatus);
    this.editRoute = '/edit/product/' + this.matchId;
    this.gameService.getGames()
      .subscribe( data => {
        console.log(data.content);
        this.games = data.content;
      });
    console.log(this.games);
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
   * Method for define the next status for the button
   * @param comparator The element to compare for select the next status
   */
  defineNextStatus(comparator: string) {
    if (comparator === 'en stock') {
      this.nextStatus = 'pas en stock';
    } else {
      this.nextStatus = 'en stock';
    }
  }

  /**
   * Method for update the status of the product
   * @param i The index of the product
   */
  onSwitchStatus(i: number) {
    this.matchesService.switchProductStatus(i, this.nextStatus);

    this.defineNextStatus(this.nextStatus);
  }

  /**
   * Method called when the user click on the delete button
   */
  onDeleteProduct() {
    this.matchesService.deleteProduct(this.matchId);
  }



}
