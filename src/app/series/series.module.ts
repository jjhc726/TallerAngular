import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SeriesListComponent } from './components/series-list/series-list.component';
import { SeriesService } from './services/series.service';

@NgModule({
  declarations: [
    SeriesListComponent  // Declaramos el componente que pertenece a este módulo
  ],
  imports: [
    CommonModule,        // Importamos funcionalidades comunes de Angular (ngIf, ngFor, etc.)
    HttpClientModule     // Importamos el módulo HTTP para que el servicio funcione
  ],
  providers: [
    SeriesService        // Proveemos el servicio para utilizarlo en el módulo
  ],
  exports: [
    SeriesListComponent  // Exportamos el componente para que pueda ser utilizado por otros módulos
  ]
})
export class SeriesModule { }
