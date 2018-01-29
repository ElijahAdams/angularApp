import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts : Post[];

  constructor(private ps:PostsService) { }

  ngOnInit() {
  this.ps.getPosts().subscribe(postsFromCall => {
    this.posts = postsFromCall;
    })
  }

}
