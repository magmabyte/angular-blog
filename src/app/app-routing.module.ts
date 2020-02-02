import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogFeedComponent } from './blog-feed/blog-feed.component';


const routes: Routes = [
  { path: '', redirectTo: '/feed', pathMatch: 'full' },
  { path: 'feed', component: BlogFeedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
