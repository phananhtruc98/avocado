import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginViewModel } from 'src/app/models/user/login-view-model.model';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  public loginForm: FormGroup;

  public loginViewModel: LoginViewModel;
  constructor() { }

  ngOnInit(): void {
    this.loginViewModel = new LoginViewModel('','');
    this.loginForm = new FormGroup({
      username: new FormControl(null, [ 
        Validators.required, 
        Validators.minLength(10),
        Validators.email
      ]),
      password: new FormControl(null, [ 
        Validators.required, 
        Validators.pattern(/^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/),
      ])
    });
  }
  onSubmit() {    
    if(this.loginForm.valid){
      this.loginViewModel = new LoginViewModel(this.loginForm.get('username').value, this.loginForm.get('password').value);
      alert('Login successfully!')
    }   
  }
}
