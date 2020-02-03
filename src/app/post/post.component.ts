import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BlogService } from '../blog.service';
import { Post } from '../post';
import { prettyDate } from '../helpers';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('postId');
    this.blogService.getById(id)
        .subscribe(post => this.post = post);
  }

  prettifyDate(date: Date): string {
    return prettyDate(date);
  }

  goBack(): any {
    this.location.back();
  }
}
