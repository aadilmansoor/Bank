import { Component } from '@angular/core';

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

  userDetails:any = {
    1000: {name: "Mishal", pass: 'abc123', acno: 1000, balance: 0},
    1001: {name: "Aadil", pass: 'abcd123', acno: 1001, balance: 0},
    1002: {name: "Ft", pass: 'abcde123', acno: 1002, balance: 0},
    1003: {name: "Shammas", pass: 'abcdef123', acno: 1003, balance: 0}
  }

  constructor(){ }

  ngOnInit(): void {

  }

  login(){
    var acnum = this.acno
    var pass = this.pass
    var userDetails = this.userDetails

    if(acnum in userDetails){
      if(pass==userDetails[acnum]["pass"]){
        alert("Login successfull")
      } else {
        alert("Incorrect password")
      }
    } else {
      alert("Enter valid account number")
    }
    
  }

  acnoChange(event:any){
    this.acno=event.target.value;
    
  }

  passChange(event:any){
    this.pass=event.target.value;
    
  }


}
