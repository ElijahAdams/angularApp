import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User [];
  showExtended: boolean = false;
  loaded: boolean = false;
  enabledAdd: boolean = true;
  currentClasses = {};
  currentStyles ={};
  constructor() {
    //for injecting services etc.
  }

  ngOnInit() {
    //Use to when doing calls like http/ajax

      this.users = [
        {
          firstName : 'Eli',
          lastName : 'adams',
          age : 63,
          address : {
            street : '6414 stanton drive',
            city : 'charlotte',
            state : 'NC'
          },
          image: 'http://lorempixel.com/600/600/people/3',
          isActive: true
        },
        {
          firstName : 'Paula',
          lastName : 'Adams',
          age : 29,
          address : {
            street : '6414 stanton drive',
            city : 'charlotte',
            state : 'NC'
          },
          image: 'http://lorempixel.com/600/600/people/7',
          isActive:false
        },
        {
          firstName : 'charlotte',
          lastName : 'Adams',
          age : 1,
          address : {
            street : '9007 Keller court',
            city : 'charlotte',
            state : 'NC'
          },
          image: 'http://lorempixel.com/600/600/people/2',
          isActive:false
        }
      ];
      this.loaded = true;
      // this.addUser(
      // {
      //   firstName : 'Roz',
      //   lastName : 'adams',
      //   age : 48
      // })

    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success' : this.enabledAdd,
      'big-text' : this.showExtended
    };
  }
  setCurrentStyles() {
    this.currentStyles = {
      'padding-top' : this.showExtended ? '0' :  '40px'
    };
  }

  toggleShowExtended() {
    this.showExtended = !this.showExtended;
  }
}
