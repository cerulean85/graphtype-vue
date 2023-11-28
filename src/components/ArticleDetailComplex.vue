<template>
  <ArticleDetailComponent
  :title="article.title"
  :updatedAt="article.updatedAt"
  :author="article.author"
  :inventory="article.inventory"
  @back="back()">

</ArticleDetailComponent>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { useRoute, useRouter } from 'vue-router'
import ArticleDetailComponent from './article/ArticleDetailComponent.vue'
import axios from "axios";

let article: any = ref({
  title: "",
  updatedAt: "",
  author: "",
  inventory: [],
});
const route = useRoute();
const router = useRouter();

onMounted(() => {
  axios
    .get(
      `http://localhost:8082/article/${route.params.articleId}/basic`
    )
    .then((response) => {
      article.value.title = response.data.title;
      article.value.updatedAt = response.data.updatedAt;
      article.value.author = response.data.author;
      for (var resItem of response.data.inventory) {
        var item = {
          no: resItem.no,
          contents: resItem.contents,
          type: resItem.type,
        };
        article.value.inventory.push(item);
      }
    })
    .catch((error) => {
      console.error("API 호출 오류:", error);
    });
});

function back() {
  router.push({ name: "article_list" });
}
</script>

<style lang="scss">
@import "@/styles/contents.scss";
</style>
