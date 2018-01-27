import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls : ['./user.component.css']
})

export class UserComponent {
  user : User;

  constructor() {

  }

  ngOnInit() {
    this.user = {
      firstName : 'Eli',
      lastName : 'adams',
      age : 25,
      address : {
        street : '6414 stanton drive',
        city : 'charlotte',
        state : 'NC'
      }

    }
  }


}

