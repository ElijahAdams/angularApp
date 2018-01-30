import { Component, OnInit, EventEmitter, Output , Input} from '@angular/core';
import { Post } from '../../models/Post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() newPost : EventEmitter<Post> = new EventEmitter<Post>();
  @Output() updatedPost : EventEmitter<Post> = new EventEmitter<Post>();

  @Input() currentPost : Post;
  @Input() isEdit : boolean;

  constructor(private ps : PostsService) { }

  ngOnInit() {

  }

  addPost(title:string, body:string) {
    if(!title || !body) {
      alert('Please Add Post')
    } else {
      this.ps.savePost({title, body} as Post).subscribe
      ( post => {
        this.newPost.emit(post);
      });
    }
  }

  updatePost() {
    this.ps.updatePost(this.currentPost).subscribe(post => {
      console.log(post);
      this.isEdit = false;
      this.updatedPost.emit(post);
    })
  }
}
