import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Anime } from '../models/anime';
import { KitsuApiService } from './kitsu-api.service';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private userId = '1';

  private animeLists = {
    currentlyWatching: [] as Anime[],
    wanted: [] as Anime[],
    watched: [] as Anime[]
  };

  constructor(private kitsuApi: KitsuApiService) {}

  searchAnime(query: string): Observable<Anime[]> {
    return this.kitsuApi.searchAnime(query);
  }

  getAnimeById(id: string): Observable<Anime> {
    return this.kitsuApi.getAnimeById(id);
  }

  fetchAnimeLists(): Observable<any> {
    return of(this.animeLists);
  }

  addAnimeToList(list: string, anime: Anime): void {
    if (this.animeLists[list]) {
      this.animeLists[list].push(anime);
    }
  }

  removeAnimeFromList(list: string, animeId: string): void {
    if (this.animeLists[list]) {
      this.animeLists[list] = this.animeLists[list].filter(anime => anime.id !== animeId);
    }
  }

  updateAnimeInList(list: string, anime: Anime): void {
    if (this.animeLists[list]) {
      const index = this.animeLists[list].findIndex(a => a.id === anime.id);
      if (index !== -1) {
        this.animeLists[list][index] = anime;
      }
    }
  }
}