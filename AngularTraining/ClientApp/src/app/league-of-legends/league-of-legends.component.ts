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
  form:FormGroup;
  constructor(private apiService: ApiService) {
    this.form = new FormGroup({
      name: new FormControl(null,[Validators.required, nameValidator()]),
    })
   }
   get name() { return this.form.get('name'); }
  ngOnInit(): void {
    

    this.apiService.getSummoner(this.baseUrl, "Nitro").subscribe({
      next: result => {
        console.log(result)
      },
      error: err => {
        console.log(err)
      }
    })
  }

}
export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden ="XYZ";
    return forbidden == control.value ? {invalidName: {value: control.value}} : null;
  };
}
