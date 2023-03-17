import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'insurance';
  password : any;
  email : any;
  userName : any ="";
  errorShow =false;
  constructor(){
    $("#success-alert").slideUp(0);
    $("#success-alert").fadeTo(0, 0).slideUp(0, function(){
      $("#success-alert").slideUp(0);
    });
  }

  addButton(){
    // var typeNote = alert(email);
// var password = document.getElementById("exampleInputPassword1").value;
// var email = document.getElementById("exampleInputEmail1").value;
console.log(this.email, this.password)
if(this.email&&this.password&&this.email==="admin"&&this.password==="admin"){

  this.userName= this.email
$('.closebtn').trigger("click")
//document.getElementById("adminName").innerHTML="Admin"

}
else{
this.errorShow=true
setTimeout(() => {
  this.errorShow=false
}, 2000);
}
}
}
