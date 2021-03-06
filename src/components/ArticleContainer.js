// @flow
import React, {Component} from 'react';

import type {Article} from "../domain/Article";
import type {ArticleService} from "../domain/ArticleServiceFactory";
import type {ArticleStore} from "../store/ArticleStoreFactory";
import {ArticleComponent} from "./ArticleComponent";
import {articleStore} from "../store/ArticleStoreFactory";
import {ArticleServiceFactory} from "../domain/ArticleServiceFactory";

type Props = {
  article: Article;
};

export class ArticleContainer extends Component<Props> {
  articleStore: ArticleStore;
  articleService: ArticleService;

  constructor(props: Props) {
    super(props);

    this.articleStore = articleStore;
    this.articleService = ArticleServiceFactory();
  }

  likeArticle(article: Article) {
    const updatedArticle = this.articleService.updateLikes(article, article.likes + 1);
    this.articleStore.updateArticle(updatedArticle);
  }

  removeArticle(article: Article) {
    this.articleStore.removeArticle(article);
  }

  render() {
    return (
      <div>
        <ArticleComponent
          article={this.props.article}
          likeArticle={(article: Article) => this.likeArticle(article)}
          deleteArticle={(article: Article) => this.removeArticle(article)}
        />
      </div>
    )
  }
}
