import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data = "Your perfect banking partner"
  data1 = "Enter Account Number"

  acno:any
  pass:any

  constructor(private router: Router,private ds:DataService){ }

  ngOnInit(): void {

  }
//methods

  login(){
    var acnum = this.acno
    var pass = this.pass
    const result = this.ds.login(acnum,pass)

    if(result){
        alert("Login successfull")
        //redirection
        this.router.navigateByUrl("dashboard")
    } else {
        alert("Incorrect password or account number")
      }
    
  }

  acnoChange(event:any){
    this.acno=event.target.value;
    
  }

  passChange(event:any){
    this.pass=event.target.value;
    
  }




}


