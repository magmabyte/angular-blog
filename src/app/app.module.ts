import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogFeedComponent } from './blog-feed/blog-feed.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogFeedComponent,
    PostComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
