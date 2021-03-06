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

  };

  getPost(id : number) : Observable<Post> {
    const url =`${this.postsUrl}/${id}`;
    return this.httpClient.get<Post>(url);
  };


  savePost(post : Post) : Observable<Post> {
    return this.httpClient.post<Post>(this.postsUrl, post, httpOptions);
  };

  updatePost(post: Post) : Observable<Post> {
    const url =`${this.postsUrl}/${post.id}`;
    return this.httpClient.put<Post>(url, post, httpOptions);

  };

  removePost(post: Post | number ) : Observable<Post> {
    const id = typeof post === 'number' ? post : post.id;
    const url =`${this.postsUrl}/${id}`;

    return this.httpClient.delete<Post>(url, httpOptions);
  };
}
