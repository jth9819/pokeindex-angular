import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HomeTitleComponent } from './pages/home/home-title/home-title.component';
import { HomeCardComponent } from './pages/home/home-card/home-card.component';
import { AboutComponent } from './pages/about/about.component';
import { AboutTitleComponent } from './pages/about/about-title/about-title.component';
import { AboutContentComponent } from './pages/about/about-content/about-content.component';
import { SearchComponent } from './pages/search/search.component';
import { SearchTitleComponent } from './pages/search/search-title/search-title.component';
import { SearchInputComponent } from './pages/search/search-input/search-input.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from './pages/list/list.component';
import { ListFigureComponent } from './pages/list/list-figure/list-figure.component';
import { HttpClientModule } from '@angular/common/http';
import { ListTitleComponent } from './pages/list/list-title/list-title.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { TeamComponent } from './pages/team/team.component';
import { TeamTitleComponent } from './pages/team/team-title/team-title.component';
import { TeamContentComponent } from './pages/team/team-content/team-content.component';

// Modules
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    HomeTitleComponent,
    HomeCardComponent,
    AboutComponent,
    AboutTitleComponent,
    AboutContentComponent,
    SearchComponent,
    SearchTitleComponent,
    SearchInputComponent,
    ListComponent,
    ListFigureComponent,
    ListTitleComponent,
    TeamComponent,
    TeamTitleComponent,
    TeamContentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    NgxPaginationModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
