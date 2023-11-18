<template>
  <div class="list">
    <span class="count"> 게시글 {{ articleList.length }}건</span>
    <hr class="line" />
    <div class="row" v-for="article in articleList" :key="article.articleId">
      <div class="layout">
        <img
          class="thumbnail-img"
          @click="detail(article.articleId)"
          :src="article.thumbnail"
        />
        <div class="text">
          <div class="title" @click="detail(article.articleId)">
            {{ article.title }}
          </div>
          <div class="contents" @click="detail(article.articleId)">
            {{ getContents(article.inventory) }}
          </div>
          <div class="date">
            작성일: {{ article.updatedAt }} | 작성자: {{ article.author }}
          </div>
        </div>
      </div>
      <hr class="line" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      articleList: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:8081/articles/basic")
      .then((response) => {
        this.articleList = response.data;
      })
      .catch((error) => {
        console.error("API 호출 오류:", error);
      });
  },
  methods: {
    detail(articleId) {
      this.$router.push({ name: "article", params: { articleId: articleId } });
    },
    getContents(inventory) {
      for (let i = 0; i < inventory.length; i++) {
        const element = inventory[i];
        if (element.type == "text") return element.contents;
      }
      return "";
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/contents.scss";
</style>
