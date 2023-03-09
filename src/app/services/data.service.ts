import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser : any

  userDetails:any = {
    1000: {name: "Mishal", pass: 'abc123', acno: 1000, balance: 0},
    1001: {name: "Aadil", pass: 'abcd123', acno: 1001, balance: 0},
    1002: {name: "Ft", pass: 'abcde123', acno: 1002, balance: 0},
    1003: {name: "Shammas", pass: 'abcdef123', acno: 1003, balance: 0}
  }

  constructor() { }

  register(acno:any,uname:any,psw:any){
    var userDetails = this.userDetails
    if(acno in userDetails){
      return false
    } else {
      userDetails[acno] = {name: uname, acno, pass: psw, balance: 0}      
      return true
    }
  }

  login(acnum:any, pass:any){
    var userDetails = this.userDetails

    if(acnum in userDetails){
      if(pass==userDetails[acnum]["pass"]){
        this.currentUser = userDetails[acnum]["name"]
        return true
      } else {
        return false
      }
    } else {
     return false
  }
}

}
