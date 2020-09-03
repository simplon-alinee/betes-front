import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuardService} from './services/auth-guard/auth-guard.service';
import {ErrorViewComponent} from './error-view/error-view.component';
import {HomeComponent} from './home/home.component';
import {AuthViewComponent} from './auth-view/auth-view.component';
import {ProfilViewComponent} from './profil-view/profil-view.component';
import {TableParisComponent} from './table-paris/table-paris.component';
import {NewBetComponent} from './new-bet/new-bet.component';
import {MyBetsComponent} from './my-bets/my-bets.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'edit/user', canActivate: [AuthGuardService], component: ProfilViewComponent},
  {path: 'profil', canActivate: [AuthGuardService], component: ProfilViewComponent},
  {path: 'auth', component: AuthViewComponent},
  {path: 'paris/game/:gameId', component: TableParisComponent},
  {path: 'game/edit/:id', component: NewBetComponent},
  {path: 'paris', component: TableParisComponent},
  {path: 'paris/mes-paris', component: MyBetsComponent},
  {path: '', canActivate: [AuthGuardService], component: HomeComponent},
  {path: 'not-found', component: ErrorViewComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
