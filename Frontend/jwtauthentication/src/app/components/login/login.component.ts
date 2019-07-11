import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  cred ;
  constructor(private fb:FormBuilder,private authService : UserServiceService,private route:Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username:[""],
      password:[""]
    });
  }
  onSubmit(){
   this.logIn();
   
}

logIn () {


  this.cred = this.loginForm.value;
  this.authService.logIn(this.cred).subscribe((res:HttpResponse<any>)=>{
    console.log(res)
    if(res.headers.get('Authorization')){
     
      localStorage.setItem('token',res.headers.get('Authorization').split(" ")[1] );

      this.route.navigate(['/user']); 
    }
  });

}


}