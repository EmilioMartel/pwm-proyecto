import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { InputauthComponent } from './time-minder/components/inputauth/inputauth.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"time-minder-3f8d9","appId":"1:391312541757:web:2d18167d1a85147fa68254","storageBucket":"time-minder-3f8d9.appspot.com","apiKey":"AIzaSyCV3jpVA_KlKU9T-xER3wu5tmlwN5a6dkI","authDomain":"time-minder-3f8d9.firebaseapp.com","messagingSenderId":"391312541757"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
