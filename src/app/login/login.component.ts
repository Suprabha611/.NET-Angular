import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  myForm: FormGroup | any;
  username: FormControl | any;
  useremail: FormControl | any;
  password: FormControl | any;
  mobile: FormControl | any;

  ngOnInit(): void {
    this.username = new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]*'), Validators.minLength(8), Validators.maxLength(15)]);
    this.useremail = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9]*'), Validators.minLength(6), Validators.maxLength(14)]);
    this.mobile = new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]);
    this.myForm = new FormGroup({
      'username': this.username,
      'useremail': this.useremail,
      'password': this.password,
      'mobile': this.mobile
    })
  }
  onSubmit()
  {
    alert("You have entered the Dreamland!!");
  }
}