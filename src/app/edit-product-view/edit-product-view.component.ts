import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatchesService} from '../services/matches/matches.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Match} from '../models/equipe.model';

@Component({
  selector: 'app-edit-product-view',
  templateUrl: './edit-product-view.component.html',
  styleUrls: ['./edit-product-view.component.css']
})
export class EditProductViewComponent implements OnInit {

  editProductForm: FormGroup;

  match: Match;

  constructor(private matchesService: MatchesService, private router: Router,
              private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;

    this.match = this.matchesService.getElementById(+id);

    this.initForm();
  }

  /**
   * Method for initialize all the controls for the new product form
   */
  initForm() {
    this.editProductForm = this.formBuilder.group({
      name: [this.match.name, Validators.required],
      status: [this.match.status, Validators.required]
    });
  }

  /**
   * Method when user submit auth form
   */
  onSubmitEditProduct() {
    const formValue = this.editProductForm.value;

    this.matchesService.editMatch(
      formValue.name,
      formValue.description,
      formValue.result,
      formValue.date,
      formValue.status
    );

    this.router.navigate(['products']);
  }

}
