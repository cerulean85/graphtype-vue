/* eslint-disable prettier/prettier */
import { createApp } from "vue";
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import ArticleList from './components/ArticleList.vue';
import About from './components/About.vue';
import Release from './components/Release.vue';
import Article from './components/Article.vue';

const routes = [
  { path: '/article_list', name: 'article_list', component: ArticleList },
  { path: '/about', component: About },
  { path: '/release', component: Release },
  { path: '/article/:articleId', name: 'article', component: Article },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app');