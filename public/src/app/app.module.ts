
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from './http.service'; //////import service here
import { HttpClientModule } from '@angular/common/http'; ////allows http requests
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';
import { NewPetsComponent } from './new-pets/new-pets.component';
import { IndPetComponent } from './ind-pet/ind-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    NewPetsComponent,
    IndPetComponent,
    PageNotFoundComponent,
    EditPetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [HttpService], /////add service here
  bootstrap: [AppComponent]
})
export class AppModule { }
