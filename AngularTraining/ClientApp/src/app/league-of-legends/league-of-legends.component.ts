import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { forkJoin, map } from 'rxjs';
import { ApiService } from '../api-service.service';

@Component({
  selector: 'app-league-of-legends',
  templateUrl: './league-of-legends.component.html',
  styleUrls: ['./league-of-legends.component.css']
})
export class LeagueOfLegendsComponent implements OnInit {
  baseUrl: string = "https://eun1.api.riotgames.com/";
  form: FormGroup;
  champions: Champion[] = [];
  constructor(private apiService: ApiService) {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, nameValidator()]),
    })
    // Validators.pattern("^[0-9]*$")
  }
  get name() { return this.form.get('name'); }
  ngOnInit(): void {
    forkJoin([
      this.apiService.getTanks(),
      this.apiService.getChampions()
    ]
    ).subscribe({
      next: ([tanks, typeData2]) => {
        // console.log(typeData1)
        console.log(typeData2)
        this.champions = Object.values(typeData2);
        console.log(this.champions)
        console.log(this.champions[0])
        console.log(tanks)
        //this.champions= this.champions.filter(element => {
        //  return element.id === "Garen";
        //});
        console.log(this.champions)
      },
      //next: res => {
      //  console.log(res[0])
      //  console.log(res[1])
      //},
      error: err => {
        console.log(err)
      }
    })


    //this.apiService.getSummoner(this.baseUrl, "Nitro").subscribe({
    //  next: result => {
    //    console.log(result)
    //  },
    //  error: err => {
    //    console.log(err)
    //  }
    //})
  }

}
export interface Champion {
  blurb: string;
  id: string;
  name: string;
  title: string
}
export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = "XYZ";
    return forbidden == control.value ? { invalidName: { value: control.value } } : null;
  };
}
