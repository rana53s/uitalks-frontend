import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './features/navbar/navbar.component';
import { BlogsModue } from './features/blogs/blogs.module';
import { TopicsModule } from './features/topics/topics.module';
import { SubscribeComponent } from './features/auth/subscribe/subscribe.component';
import { LoginComponent } from './features/auth/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { FeaturesComponent } from './features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SubscribeComponent,
    LoginComponent,
    HomeComponent,
    FeaturesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BlogsModue,
    TopicsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCIj9XgmKirzRJBkrzlLRZiCC4rMij-18w',
      authDomain: 'fir-auth-cdf77.firebaseapp.com',
      projectId: 'fir-auth-cdf77',
      storageBucket: 'fir-auth-cdf77.appspot.com',
      messagingSenderId: '731984255637',
      appId: '1:731984255637:web:af7002bf2fe86b57a3199c',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/**
 {
  apiKey: "AIzaSyCIj9XgmKirzRJBkrzlLRZiCC4rMij-18w",
  authDomain: "fir-auth-cdf77.firebaseapp.com",
  projectId: "fir-auth-cdf77",
  storageBucket: "fir-auth-cdf77.appspot.com",
  messagingSenderId: "731984255637",
  appId: "1:731984255637:web:af7002bf2fe86b57a3199c"
}
 */
