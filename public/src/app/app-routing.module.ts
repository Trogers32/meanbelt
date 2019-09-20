import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetsComponent } from './pets/pets.component';
import { NewPetsComponent } from './new-pets/new-pets.component';
import { IndPetComponent } from './ind-pet/ind-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'Home', component: PetsComponent },
  { path: 'PetCreation', component: NewPetsComponent },
  { path: 'Pet/:id', component: IndPetComponent },
  { path: 'Pet/Edit/:id', component: EditPetComponent },
  // redirect to /Pets if there is nothing in the url
  { path: '', pathMatch: 'full', redirectTo: '/Home' },
  // the ** will catch anything that did not match any of the above routes
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
