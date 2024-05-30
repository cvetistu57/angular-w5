import { Component } from '@angular/core';
import { AnimeService } from '../services/anime.service';
import { Anime } from '../models/anime';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-anime-search',
  standalone: true,
  imports: [MatTabsModule, FormsModule],
  templateUrl: './anime-search.component.html',
  styleUrl: './anime-search.component.css'
})
export class AnimeSearchComponent {
  results: Anime[] = [];

  constructor(private animeService: AnimeService) { }

  search(query: string): void {
    this.animeService.searchAnime(query).subscribe(data => {
      this.results = data;
    });
  }
}
