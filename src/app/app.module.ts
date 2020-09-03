import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductRowComponent } from './table-row/product-row.component';

import { MatchesService } from './services/matches/matches.service';
import { HeaderComponent } from './header/header.component';
import { ErrorViewComponent } from './error-view/error-view.component';
import { AuthViewComponent } from './auth-view/auth-view.component';
import {AuthService} from './services/auth/auth.service';
import {AuthGuardService} from './services/auth-guard/auth-guard.service';
import {AppRoutingModule} from './app-routing.module';
import { ProfilViewComponent } from './profil-view/profil-view.component';;
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TableParisComponent } from './table-paris/table-paris.component';
import { FooterComponent } from './footer/footer.component';
import {BetService} from './services/bet/bet.service';
import {GameService} from './services/game/game.service';
import {TeamService} from './services/team/team.service';
import {UserService} from './services/user/user.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { NewBetComponent } from './new-bet/new-bet.component';
import { MyBetsComponent } from './my-bets/my-bets.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductRowComponent,
    HeaderComponent,
    ErrorViewComponent,
    AuthViewComponent,
    ProfilViewComponent,
    TableParisComponent,
    FooterComponent,
    NewBetComponent,
    MyBetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MatchesService,
    AuthService,
    AuthGuardService,
    BetService,
    GameService,
    MatchesService,
    TeamService,
    UserService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
