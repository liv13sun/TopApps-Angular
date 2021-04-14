import { DetailsComponent } from './details/details.component';
import { CardComponent } from './card/card.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', component: CardComponent },              
    { path: 'details/:card.name', component: DetailsComponent }           
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }