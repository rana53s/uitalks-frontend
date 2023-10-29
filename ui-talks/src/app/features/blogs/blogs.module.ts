import { NgModule } from '@angular/core';
import { BlogsDashComponent } from './blogs-dash/blogs-dash.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RecentBlogsComponent } from './recent-blogs/recent-blogs.component';
import { FeaturedBlogsComponent } from './featured-blogs/featured-blogs.component';

@NgModule({
  declarations: [BlogsDashComponent, RecentBlogsComponent, FeaturedBlogsComponent],
  imports: [],
  providers: [BrowserModule, AppRoutingModule],
})
export class BlogsModue {}
