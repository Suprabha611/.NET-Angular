import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserService } from '../user.service';
import { AdminService } from '../admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup
  //Authenticate user details from userapi
  userapi = environment.userapi;
  adminapi = environment.adminapi;
  submitted = false;

  get f() { return this.loginForm.controls; }
  //constructor injection
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private userService: UserService, private adminService: AdminService) { }
  ngOnInit(): void {
    this.userService.validateAuth(false); //data parameter in your userservice
    this.adminService.validateAdmin(false);
    this.loginForm = this.formBuilder.group({
      useremail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.http.get<any>(this.userapi).subscribe(res => {
      const user = res.find((a: any) => {
        return a.useremail === this.loginForm.value.useremail && a.password === this.loginForm.value.password
      });
      this.http.get<any>(this.adminapi).subscribe(res => {
        const admin = res.find((a: any) => {
          if(this.loginForm.value.useremail=="admin@gmail.com" && this.loginForm.value.password=="admin123"){
            return true
          }
          else{
            return false
          }
        });
        if (user) {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 1000,
          })

          Toast.fire({
            icon: 'success',
            title: 'Login Successful!!'
          })
          this.loginForm.reset();
          this.router.navigate([''])
          this.userService.validateAuth(true);
        } 
        else if(admin){
          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 1000,
          })

          Toast.fire({
            icon: 'success',
            title: 'Login Successful!!'
          })
          this.loginForm.reset();
          this.router.navigate([''])
          this.adminService.validateAdmin(true);
        }
        else {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 1000,
          })
          Toast.fire({
            icon: 'error',
            title: 'User not found!!'
          })
          this.userService.validateAuth(false);
          this.adminService.validateAdmin(false);
        }
      })
    })
  }
}