import { Component, Input } from '@angular/core';
import { Article } from '../model/article.model';

@Component({
  selector: 'app-lista-articoli',
  templateUrl: './lista-articoli.component.html',
  styleUrls: ['./lista-articoli.component.css'],
})
export class ListaArticoliComponent {
  @Input() articles: Article[];
}
