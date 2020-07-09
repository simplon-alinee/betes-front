import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth/auth.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {

  authForm: FormGroup;

  errorMsg: string;

  constructor(private authService: AuthService, private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
  }

  /**
   * Method for initialize all the controls for
   * the auth form
   */
  initForm() {
    this.authForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /**
   * Method when user submit auth form
   */
  onSignIn() {
    const formValue = this.authForm.value;

    this.authService.checkAuth(
      formValue.username,
      formValue.password
    )
      .then(() => {
        this.router.navigate(['products']);
      }, (err) => {
        this.errorMsg = err;
      });
  }
}
