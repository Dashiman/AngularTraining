import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Champion } from './league-of-legends/league-of-legends.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //https://cors-anywhere.herokuapp.com/ request access
  //https://developer.riotgames.com/apis#summoner-v4/GET_getBySummonerName


  corsProxy: string = "https://cors-anywhere.herokuapp.com/"
  constructor(private http: HttpClient) {

  }

  getSummoner(baseUrl: string, name: string): Observable<any> {
    return this.http.get(this.corsProxy + baseUrl + "/lol/summoner/v4/summoners/by-name/" + name).pipe(map(res => { return res as any }));
  }

  getChampions(): Observable<Champion[]> {
    return this.http.get<any>("https://ddragon.leagueoflegends.com/cdn/13.4.1/data/en_US/champion.json").pipe(map(res => { return res.data as Champion[] }));
  }
  //WOT

  getTanks(): Observable<any> {
    return this.http.get<any>("https://api.worldoftanks.eu/wot/encyclopedia/vehicles/?application_id=KLUCZ").pipe(map(res => { return res as any }));
  }
}
