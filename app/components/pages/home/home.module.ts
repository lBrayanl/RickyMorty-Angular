import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CharactersModule } from '../characters/characters.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    YouTubePlayerModule,
    NgbModule,
    CharactersModule,
    RouterModule
  ]
})
export class HomeModule { }
