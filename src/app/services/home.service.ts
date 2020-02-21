import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {URI} from "../uri";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpService:HttpService) { }

  async home(){
    return await this.httpService.get(URI.HOME,{});
  }
}
