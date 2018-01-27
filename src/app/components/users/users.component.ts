import { Component, OnInit, ViewChild } from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user : User ={
    firstName:'',
    lastName:'',
    email: ''
  }
  users: User [];
  loaded: boolean = false;
  enabledAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;

  constructor() {
    //for injecting services etc.
  }

  ngOnInit() {
    //Use to when doing calls like http/ajax

      this.users = [
        {
          firstName : 'Eli',
          lastName : 'adams',
          email: 'a@a.com',
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide: true
        },
        {
          firstName : 'Paula',
          lastName : 'Adams',
          email: 'a@a.com',
          isActive:false,
          registered: new Date('01/30/2011 12:30:26'),
          hide: true
        },
        {
          firstName : 'charlotte',
          lastName : 'Adams',
          email: 'a@a.com',
          isActive:false,
          registered: new Date('05/02/2023 08:15:00'),
          hide: true
        }
      ];
      this.loaded = true;

  }

  onSubmit({value, valid}:{value: User, valid: boolean}) {
    if(!valid) {
      console.log('Form is not Valid')
    } else {
      value.isActive = true;
      value.registered = new Date();
      this.users.unshift(value);
      this.form.reset();
      this.showUserForm = false;
    }
  }

}
