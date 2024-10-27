import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { Serie } from '../../Serie';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  series: Serie[] = [];
  selectedSerie: Serie | null = null;
  averageSeasons: number = 0;

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe((data) => {
      this.series = data;

      
      const totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
      this.averageSeasons = totalSeasons / this.series.length;
    });
  }

  selectSerie(id: number): void {
    this.selectedSerie = this.series.find((serie) => serie.id === id) || null;
  }
}
