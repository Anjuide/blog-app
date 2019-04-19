import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() id: number;
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreated_at: Date;
  @Input() index: number;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
  }

  onLike() {
    this.postLoveIts += 1;
  }
  onDisLike() {
    this.postLoveIts += -1;
  }
  onDelete() {
    this.postService.deletePost(this.index);
  }
}
