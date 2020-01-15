import { InscriptionComponent } from './components/inscription/inscription.component';
import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {path: 'Inscription', component: InscriptionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
