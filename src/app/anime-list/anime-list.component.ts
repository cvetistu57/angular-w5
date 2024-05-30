import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../services/anime.service';
import { Anime } from '../models/anime';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-anime-list',
  standalone: true,
  imports: [MatTabsModule, FormsModule],
  templateUrl: './anime-list.component.html',
  styleUrl: './anime-list.component.css'
})
export class AnimeListComponent implements OnInit{
  currentlyWatching: Anime[] = [];
  wanted: Anime[] = [];
  watched: Anime[] = [];

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.fetchAnimeLists();
  }

  fetchAnimeLists(): void {
    this.animeService.fetchAnimeLists().subscribe(data => {
      this.currentlyWatching = data.currentlyWatching;
      this.wanted = data.wanted;
      this.watched = data.watched;
    });
  }

  addAnimeToList(list: string, anime: Anime): void {
    this.animeService.addAnimeToList(list, anime);
    this.fetchAnimeLists(); 
  }

  removeAnimeFromList(list: string, animeId: string): void {
    this.animeService.removeAnimeFromList(list, animeId);
    this.fetchAnimeLists(); 
  }
  updateAnimeInList(list: string, anime: Anime): void {
    this.animeService.updateAnimeInList(list, anime);
    this.fetchAnimeLists(); 
  }
}
