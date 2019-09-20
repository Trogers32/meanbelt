import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { HttpService } from '../http.service';

@Component({
  selector: 'app-ind-pet',
  templateUrl: './ind-pet.component.html',
  styleUrls: ['./ind-pet.component.css']
})
export class IndPetComponent implements OnInit {
  currPet;
  liked;
  like;
  constructor(private _httpService: HttpService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.currPet = params );
   }

  ngOnInit() {
    this.liked = false;
    this.like = "Like this pet"
    this.getIndividualPet(this.currPet.id)
  }
  getIndividualPet(name: string){
    let observable = this._httpService.getIPet(name);
    observable.subscribe(data => {
        console.log("Got our Pets!", data)
        this.currPet = data[0];
    });
  }
  removePet(id: string){
    let observable = this._httpService.removeP(id);
    observable.subscribe(data => {
      console.log("Got our tasks!", data)
      this.router.navigate(['Home'])
    });
  }
  upVote(id: string){
    this.liked = true;
    this.like = "You like this pet!"
    let observable = this._httpService.upvotePet(id);
    observable.subscribe(data => {
        console.log("Upvote sent!", data)
        this.getIndividualPet(this.currPet.name)
    });
  }
}
