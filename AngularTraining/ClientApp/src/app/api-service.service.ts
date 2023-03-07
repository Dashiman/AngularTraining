import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //https://cors-anywhere.herokuapp.com/ request access
  //https://developer.riotgames.com/apis#summoner-v4/GET_getBySummonerName


  corsProxy:string ="https://cors-anywhere.herokuapp.com/"
  constructor(private http: HttpClient) {

  }

  getSummoner(baseUrl: string, name: string): Observable<any>{
    return this.http.get(this.corsProxy+baseUrl + "/lol/summoner/v4/summoners/by-name/" + name).pipe(map(res => { return res as any }));
  }

  getChampions():Observable<any>{
    return this.http.get("https://ddragon.leagueoflegends.com/cdn/13.4.1/data/en_US/champion.json").pipe(map(res => { return res as any }));
  }
}
