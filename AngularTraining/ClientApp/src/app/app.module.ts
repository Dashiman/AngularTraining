import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LeagueOfLegendsComponent } from './league-of-legends/league-of-legends.component';
import { WorldOfTanksComponent } from './world-of-tanks/world-of-tanks.component';
import { TokenInterceptor } from './token-incerceptor.service';
import { CommonModule } from '@angular/common';

@NgModule({ declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        CounterComponent,
        FetchDataComponent,
        LeagueOfLegendsComponent,
        WorldOfTanksComponent,
    ],
  bootstrap: [AppComponent], imports: [
    CommonModule,
    BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'wot', component: WorldOfTanksComponent },
            { path: 'lol', component: LeagueOfLegendsComponent },
        ])], providers: [
        //zarejestrowany interceptor dla api
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule { }
