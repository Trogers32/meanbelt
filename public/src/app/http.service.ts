import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient){
      this.getPets();
  }
  getPets(){
    return this._http.get('/Pets');
  }
  getIPet(name: string){
    console.log("this is name:", name)
    return this._http.get(`/Pets/${name}`);
  }
  editPet(Pet){ /////actually add quote
    console.log("Got to service", Pet)
    return this._http.put(`/Pet/${Pet._id}`, Pet);
  }
  actuallyEditPet(Pet){ /////actually add quote
    return this._http.put(`/Auth/${Pet._id}`, Pet);
  }
  upvotePet(id){
    return this._http.put(`/Pets/up/${id}`, id);
  }
  downvoteQuote(qid){
    return this._http.put(`/Pets/down/${qid}`, qid);
  }
  addPet(newPet){
    console.log(newPet)
    return this._http.post('/Pets', newPet)
  }
  removeP(id: string){
    console.log(`/remove/${id}`)
    return this._http.delete(`/remove/${id}`)
  }
}