import { Injectable } from '@angular/core';
import {User} from '../models/User';
import { Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
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
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      },1000);

      setTimeout(() => {
        observer.next(2);
      },2000);

      setTimeout(() => {
        observer.next(3);
      },3000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user)
  }
}
