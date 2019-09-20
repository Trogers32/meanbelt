import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new-pets',
  templateUrl: './new-pets.component.html',
  styleUrls: ['./new-pets.component.css']
})
export class NewPetsComponent implements OnInit {
  newPet;
  currPet;
  errors;
  dupe;
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.errors = [];
    this.newPet = {name: "", petType: "", description: "", skills: []};
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
          this.errors.push("Duplicate pet name found. Please use a different name.")
        } else {
          let observable = this._httpService.addPet(this.newPet);
          observable.subscribe(data => {
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
              this.router.navigate(['Home'])
            }
          });}
    });
  }
}
