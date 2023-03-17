import { Component } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent {
  msg=""
  booleanValue=false
  Onsubmit(){
    this.booleanValue=true
    this.msg="Submitted"
    setTimeout(() => {
      this.booleanValue=false
      this.msg=""
    }, 9000);
  }
}
