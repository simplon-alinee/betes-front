import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuardService} from './services/auth-guard/auth-guard.service';
import {ErrorViewComponent} from './error-view/error-view.component';
import {HomeComponent} from './home/home.component';
import {SingleProductViewComponent} from './single-product-view/single-product-view.component';
import {AuthViewComponent} from './auth-view/auth-view.component';
import {NewProductViewComponent} from './new-product-view/new-product-view.component';
import {EditProductViewComponent} from './edit-product-view/edit-product-view.component';
import {ProfilViewComponent} from './profil-view/profil-view.component';
import {TableParisComponent} from './table-paris/table-paris.component';

const routes: Routes = [
  {path: 'products', canActivate: [AuthGuardService], component: HomeComponent},
  {path: 'products/:id', canActivate: [AuthGuardService], component: SingleProductViewComponent},
  {path: 'new/product', canActivate: [AuthGuardService], component: NewProductViewComponent},
  {path: 'edit/product/:id', canActivate: [AuthGuardService], component: EditProductViewComponent},
  {path: 'edit/user', canActivate: [AuthGuardService], component: ProfilViewComponent},
  {path: 'profil', canActivate: [AuthGuardService], component: ProfilViewComponent},
  {path: 'auth', component: AuthViewComponent},
  {path: 'paris', component: TableParisComponent},
  {path: 'home', component: HomeComponent},
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
