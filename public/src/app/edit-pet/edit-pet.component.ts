import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  editPet;
  errors;
  dupe;
  name;
  errorsDupe;
  constructor(private _httpService: HttpService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.name = params );
   }

  ngOnInit() {
    this.errors = [];
    this.editPet = {name: "", petType: "", description: "", skills: []};
    let observable = this._httpService.getIPet(this.name.id);
    observable.subscribe(data => {
      console.log(data, "oninit", this.name)
      this.editPet = data[0];
    });
  }
  getIndividualPet(name: string){
    this.dupe = false;
    let observable = this._httpService.getIPet(name);
    observable.subscribe(data => {
        console.log("Got our Pets!", data)
        if(data[0]){
          this.dupe = true;
        }
        if(this.dupe){
          this.errorsDupe = ("Duplicate pet name found. Please use a different name.")
        } else {
          let observable = this._httpService.editPet(this.editPet);
          observable.subscribe(data => {
            console.log("Got to edit", data)
            if(data['errors']){
              this.errors = data['message'].split("Pet validation failed: ").join().split(",");
              for(var i = 0; i < this.errors.length; i++){
                if(this.errors[i].includes("name: An Pet name is required")){
                  this.errors[i] = "An Pet name is required."
                }
                if(this.errors[i].includes("Pet name must be at least 3 characters long.")){
                  this.errors[i] = "Pet name must be at least 3 characters long."
                }
              }
              console.log(this.errors)
            } else {
              this.errors = null;
              this.router.navigate(['Pet/', this.editPet.name])
            }
          });}
    });
  }
}
