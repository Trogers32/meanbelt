import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  Pets;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.Pets = [];
    this.getPetsFromService();
  }

  getPetsFromService(){
    let observable = this._httpService.getPets();
    observable.subscribe(data => {
        console.log("Got our Pets!", data)
        this.Pets = data;
        console.log(this.Pets)
    });
  }

}
