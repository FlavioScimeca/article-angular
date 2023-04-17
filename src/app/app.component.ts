import { Component, OnChanges } from '@angular/core';
import { Article } from './model/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnChanges {
  articles: Article[] = [];

  ngOnChanges() {}
  onGetArticle(articles: Article) {
    this.articles.push(articles);
  }
}
