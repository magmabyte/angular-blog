import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-feed',
  templateUrl: './blog-feed.component.html',
  styleUrls: ['./blog-feed.component.css']
})
export class BlogFeedComponent implements OnInit {
  posts: Post[];

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.blogService.get()
        .subscribe(posts => this.posts = posts);
  }

}
