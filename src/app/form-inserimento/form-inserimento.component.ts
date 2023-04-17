import { Component, Output, EventEmitter } from '@angular/core';
import { Article } from '../model/article.model';

@Component({
  selector: 'app-form-inserimento',
  templateUrl: './form-inserimento.component.html',
  styleUrls: ['./form-inserimento.component.css'],
})
export class FormInserimentoComponent {
  @Output() newArticle = new EventEmitter<Article>();

  title: string;
  description: string;

  alert: string = '';

  onAddArticle() {
    if (this.title == null && this.description == null) {
      this.alert = 'sul serio ? 2 cose devi compilare';
      return;
    } else {
      this.newArticle.emit(new Article(this.title, this.description));
      this.title = null;
      this.description = null;
      this.alert = null;
    }
  }
}
