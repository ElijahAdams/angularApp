import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import {Post} from '../models/Post';

const httpOptions = {
  headers : new HttpHeaders({'Content-type' :  'application/json'})
};

@Injectable()
export class PostsService {
  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient : HttpClient, ) { }

  getPosts() :Observable<Post[]> {

    return this.httpClient.get<Post[]>(this.postsUrl);

  }

  savePost(post : Post) : Observable<Post> {
    return this.httpClient.post<Post>(this.postsUrl, post, httpOptions);
  }
}
