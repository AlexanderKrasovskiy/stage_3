import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.scss'],
})
export class LogInPageComponent implements OnInit {
  loginForm!: FormGroup;

  get login() {
    return this.loginForm.controls['login'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  constructor(public authService: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordStrengthValidator()]],
    });
  }

  onLogin() {
    const { login, password } = this.loginForm.value as Record<string, string>;
    this.authService.onLogin(login.trim(), password.trim());
  }

  passwordStrengthValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value as string;
      if (!value) return null;

      const isLong = value.length >= 8;
      const hasUppercase = /[A-Z]+/.test(value);
      const hasLowercase = /[a-z]+/.test(value);
      const hasNumbers = /[0-9]+/.test(value);
      const hasSpecialChars = /[!@#?\]_]+/.test(value);

      const reasons: string[] = [];

      /* eslint-disable @typescript-eslint/no-unused-expressions */
      !isLong && reasons.push('at least 8 characters');
      (!hasUppercase || !hasLowercase) &&
        reasons.push('both uppercase and lowercase letters');
      !hasNumbers && reasons.push('numbers');
      !hasSpecialChars &&
        reasons.push('at least one special character: ! @ # ? ] _');

      const errorText = `Your password isn't strong enough, it should have: ${reasons.join(
        ', ',
      )}`;

      const isValid =
        isLong && hasUppercase && hasLowercase && hasNumbers && hasSpecialChars;

      return isValid ? null : { passwordStrength: errorText };
    };
  }
}
