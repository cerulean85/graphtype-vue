/* eslint-disable prettier/prettier */
import { createApp } from "vue";
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import ArticleListComplex from './components/ArticleListComplex.vue';
import About from './components/About.vue';
import Release from './components/Release.vue';
import ArticleDetailComplex from './components/ArticleDetailComplex.vue';
import ArticleEditorComplex from './components/ArticleEditorComplex.vue';

const routes = [
  { path: '/article_list', name: 'article_list', component: ArticleListComplex },
  { path: '/about', component: About },
  { path: '/release', component: Release },
  { path: '/article/:articleId', name: 'article_detail', component: ArticleDetailComplex },
  { path: '/article_editor', component: ArticleEditorComplex },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app');