import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service.service';

@Component({
  selector: 'app-league-of-legends',
  templateUrl: './league-of-legends.component.html',
  styleUrls: ['./league-of-legends.component.css']
})
export class LeagueOfLegendsComponent implements OnInit {
  baseUrl: string = "https://eun1.api.riotgames.com/";
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getSummoner(this.baseUrl, "Nitro").subscribe({
      next: result => {
        console.log(result)
      },
      error: err => {
        console.log(err)
      }
    })

    //this.apiService.getChampions().subscribe({
    //  next: result => {
    //    console.log(result)
    //  },
    //  error: err => {
    //    console.log(err)
    //  }
    //})
  }

}
