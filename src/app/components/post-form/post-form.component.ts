import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(private ps : PostsService) { }

  ngOnInit() {
  }

  addPost(title:string, body:string) {
    if(!title || !body) {
      alert('Please Add Post')
    } else {
      this.ps.savePost({title, body} as Post).subscribe ( post =>
      {
        console.log(post)
      });
    }


  }
}
