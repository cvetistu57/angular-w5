import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../services/anime.service';
import { Anime } from '../models/anime';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css'],
  standalone:true,
  imports: [MatTabsModule, FormsModule]
})
export class AnimeDetailComponent implements OnInit {
  anime: Anime;
  selectedList: string;

  constructor(private route: ActivatedRoute, private animeService: AnimeService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.animeService.getAnimeById(id).subscribe(data => {
      this.anime = data;
    });
  }

  addToList(): void {
    if (this.selectedList) {
      this.animeService.addAnimeToList(this.selectedList, this.anime);
    }
  }
}