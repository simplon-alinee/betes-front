import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuardService} from './services/auth-guard/auth-guard.service';
import {ErrorViewComponent} from './error-view/error-view.component';
import {HomeComponent} from './home/home.component';
import {AuthViewComponent} from './auth-view/auth-view.component';
import {ProfilViewComponent} from './profil-view/profil-view.component';
import {TableParisComponent} from './table-paris/table-paris.component';
import {NewBetComponent} from './new-bet/new-bet.component';

const routes: Routes = [
  {path: 'home', canActivate: [AuthGuardService], component: HomeComponent},
  {path: 'edit/user', canActivate: [AuthGuardService], component: ProfilViewComponent},
  {path: 'profil', canActivate: [AuthGuardService], component: ProfilViewComponent},
  {path: 'auth', component: AuthViewComponent},
  {path: 'paris/game/:gameId', component: TableParisComponent},
  {path: 'game/edit/:gameId', component: NewBetComponent},
  {path: 'paris', component: TableParisComponent},
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
