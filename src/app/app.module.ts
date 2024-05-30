import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { AnimeSearchComponent } from './anime-search/anime-search.component';
import { MaterialModule } from './material.module';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    AppComponent,
    MatTabsModule,
    ProfileComponent,
    AnimeListComponent,
    AnimeDetailComponent,
    AnimeSearchComponent
  ],
  providers: [],
})
export class AppModule { }