import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';
// import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MainFooterComponent } from './pages/main-footer/main-footer.component';
import { ServicesComponent } from './pages/services/services.component';
// import { WorkComponent } from './pages/work/work.component';
import { CardsComponent } from './sharepages/cards/cards.component';
// import { ContactFormComponent } from './sharepages/contact-form/contact-form.component';
import { DropsComponent } from './sharepages/drops/drops.component';
import { FooterComponent } from './sharepages/footer/footer.component';
import { NavbarComponent } from './sharepages/navbar/navbar.component';
import { ContactFormComponent } from './sharepages/contact-form/contact-form.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AchievementsComponent,
    // ContactComponent,
    HomeComponent,
    MainFooterComponent,
    ServicesComponent,
    // WorkComponent,
    CardsComponent,
    // ContactFormComponent,
    DropsComponent,
    FooterComponent,
    NavbarComponent,
    ContactFormComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
