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
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''

  }
  isEdit: boolean = false;
  constructor(private ps:PostsService) { }

  ngOnInit() {
  this.ps.getPosts().subscribe(postsFromCall => {
    this.posts = postsFromCall;
    })
  }
  onNewPost(post : Post) {

    this.posts.unshift(post);
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }

  onUpdatedPost(post: Post) {
    this.posts.forEach((cur, index) => {
      if(post.id === cur.id){
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentPost =
        {
          id: 0,
          title: '',
          body: ''

        }
      }
    })
  }

}
