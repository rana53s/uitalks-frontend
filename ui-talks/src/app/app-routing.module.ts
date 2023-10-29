import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedBlogsComponent } from './features/blogs/featured-blogs/featured-blogs.component';
import { RecentBlogsComponent } from './features/blogs/recent-blogs/recent-blogs.component';
import { BlogsDashComponent } from './features/blogs/blogs-dash/blogs-dash.component';
import { TopicsDashComponent } from './features/topics/topics-dash/topics-dash.component';
import { SubscribeComponent } from './features/auth/subscribe/subscribe.component';
import { LoginComponent } from './features/auth/login/login.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'blogs',
    children: [
      {
        path: 'dash',
        component: BlogsDashComponent,
      },
      {
        path: 'featured-blogs',
        component: FeaturedBlogsComponent,
      },
      {
        path: 'recent-blogs',
        component: RecentBlogsComponent,
      },
    ],
  },
  {
    path: 'topics',
    component: TopicsDashComponent,
  },
  {
    path: 'subscribe',
    component: SubscribeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
