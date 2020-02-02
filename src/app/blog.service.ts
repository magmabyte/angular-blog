import { Injectable } from '@angular/core';

import { Post } from './post';
import { Posts } from './post.mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  get(): Observable<Post[]> {
    return of(Posts);
  }

  get_by_index(i: number): Observable<Post> {
    return of(Posts[i]);
  }
}
