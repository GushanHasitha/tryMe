import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordCombination } from './password-combination';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    passwordCombination: new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    }, PasswordCombination.passwordCombinationWrong)
  });

  get username() {
    //console.log(this.form.get('username'));
    return this.form.get('username');
  }

  get email() {
    return this.form.get('email');
  }

  get passwordCombination() {
    return this.form.get('passwordCombination');
  }

  get password() {
    return this.form.get('passwordCombination.password');
  }

  get confirmPassword() {
    return this.form.get('passwordCombination.confirmPassword');
  }

  addUser(f) {
    console.log(f.form);
  }
}
