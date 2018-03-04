import {articleService} from "./ArticleService";

const articleServiceInstance = articleService();
const article = articleServiceInstance.createArticle({
  title: '12 rules for life',
  author: 'Jordan Peterson'
});
const incrementedArticle = articleServiceInstance.updateLikes(article, 4);

console.log('article', article);
const itWillPrint = {
  id: "92832a9a-ec55-46d7-a34d-870d50f191df",
  likes: 0,
  title: "12 rules for life",
  author: "Jordan Peterson"
};
console.log('incrementedArticle', incrementedArticle);
const itWillPrintUpdated = {
  id: "7ddcdee8-09f1-474d-8486-a7a1bcdcbd34",
  likes: 4,
  title: "12 rules for life",
  author: "Jordan Peterson"
};
