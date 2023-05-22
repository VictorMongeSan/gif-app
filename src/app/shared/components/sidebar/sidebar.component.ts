import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gif.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) {}

  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }

  repeatSearch(tag: string):void {
   this.gifsService.repeatSearch(tag);

    // Llama a los métodos o funciones necesarios del servicio GifsService para repetir la búsqueda.
    // Por ejemplo:
    // this.gifsService.repetirBusqueda(tag);
  }
}

