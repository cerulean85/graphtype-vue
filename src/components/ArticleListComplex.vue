<template>
  <div class="list">
    <span class="count"> 게시글 {{ articleList.length }}건</span>
    <hr class="line" />
        <ArticleListItem 
          v-for="article in articleList" 
          :key="article.articleId" 
          v-bind="article"
          @detail="detail(article.articleId)" />
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue"
import { useRouter } from 'vue-router'
import ArticleListItem from './article/ArticleListItem.vue'

let articleList: any = ref([]);
const router = useRouter();

function detail(articleId: string): void {
  router.push({ name: "article_detail", params: { articleId: articleId } });
}

function getContents(inventory: any): string {
  for (let item of inventory) {
    if (item.type == "text") return item.contents;
  }
  return "";
}

onMounted(() => {
  axios
    .get("http://localhost:8082/articles/basic")
    .then((response) => {
      articleList.value = response.data;
      articleList.value.forEach((e: { contents: string; inventory: any; }) => e.contents = getContents(e.inventory));
    })
    .catch((error) => console.error(error));
})
</script>

<style lang="scss">
@import "@/styles/contents.scss";
</style>
