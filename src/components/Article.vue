<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="article">
    <button @click="back">목록으로</button>
    <h1 class="title">{{ article.title }}</h1>
    <hr class="line" />
    <div class="author">
      작성일: {{ article.updatedAt }} / 작성자: {{ article.author }}
    </div>

    <div v-for="item in article.inventory" :key="item.no">
      <div class="image-box">
        <img v-if="item.type == 'image'" class="attr" :src="item.contents" />
      </div>
      <div v-if="item.type == 'text'" class="text">
        <pre>{{ item.contents }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      article: {
        title: "",
        updatedAt: "",
        author: "",
        inventory: [],
      },
    };
  },
  mounted() {
    axios
      .get(
        `http://localhost:8081/article/${this.$route.params.articleId}/basic`
      )
      .then((response) => {
        this.article = response.data;
        this.article.title = response.data.title;
        this.article.updatedAt = response.data.updatedAt;
        this.article.author = response.data.author;
        for (var resItem in response.data.inventory) {
          var item = {
            no: resItem.no,
            contents: resItem.contents,
            type: resItem.type,
          };
          this.article.inventory.push(item);
        }

        console.log(this.article.inventory);
      })
      .catch((error) => {
        console.error("API 호출 오류:", error);
      });
  },
  methods: {
    back() {
      this.$router.push({ name: "article_list" });
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/contents.scss";
</style>
