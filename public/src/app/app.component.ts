import { Component, OnInit, Input } from '@angular/core';

import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Pets: Object;
  currPet: any;
  newPet: any;
  errors;
  show;
  constructor(private _httpService: HttpService){
  }
  // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit(){
    this.newPet = { title: "", price: "", imageURL: "" };
    this.show = true;
  }
  getPetsFromService(){
    let observable = this._httpService.getPets();
    observable.subscribe(data => {
        console.log("Got our Pets!", data)
        this.Pets = data;
        console.log(this.Pets)
    });
  }
  getPet(id) {
    this.currPet = id;
  }
  getIndividualPet(id: string){
    let observable = this._httpService.getIPet(id);
    observable.subscribe(data => {
        console.log("Got our Pets!", data)
        this.currPet = data;
    });
  }
}