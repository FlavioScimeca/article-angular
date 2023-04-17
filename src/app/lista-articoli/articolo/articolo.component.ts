import { Component, Input } from '@angular/core';
import { Article } from 'src/app/model/article.model';

@Component({
  selector: 'app-articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css'],
})
export class ArticoloComponent {
  @Input() article: Article;

  likes: number = 0;

  onAddLike() {
    this.likes++;
  }
  onRemoveLike() {
    if (this.likes <= 0) {
      return;
    }
    this.likes--;
  }
}
