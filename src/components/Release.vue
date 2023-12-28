<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="main">
    <h1 class="title">Release</h1>
    <hr />
    <ul>
      <li>Youtube 음악 영상 자동 생성 서비스 개발 (추후 Link 제공)</li>
      <li>Smart Memo Service (가칭)</li>
      <li>Gen AI 연동 Article 자동 생성 Service / Blog</li>
    </ul>
  </div>
</template>


<style lang="scss">
@import "@/styles/contents.scss";
</style>


<!-- eslint-disable vue/multi-word-component-names
<template>
  <div>ArticleWriter</div>
  <span>title</span>
  <input type="text" />
  <br />
  <span>file</span>
  <input id="customFile" type="file" @change="handleFileChange" />
  <br />
  <label for="customFile">{{ filename }}</label>
  <button @click="addArticle">제출하기</button>
  <infinite-scroll
      @infinite-scroll="loadDataFromServer"
      :message="message"
      :noResult="noResult"
    >
       <div>
        <div
          v-for="repo in trendingRepos"
          :key="repo.id"
          style="margin-bottom: 20px"
        >
          <div>
            <img :src="repo.owner.avatar_url" alt="" style="height: 50px">
          </div>
          <div>{{repo.name}}</div>
        </div>
      </div>
    </infinite-scroll>
</template>

<script>

import InfiniteScroll from "infinite-loading-vue3";
import axios from "axios";

export default {
  data() {
    return {
      filename: "파일을 선택하세요.",
      selectedFile: null,



      trendingRepos: [],
      page: 1,
      noResult: false,
      message: ""


    };
  },
  components: {
      InfiniteScroll
    },
  methods: {
    addArticle() {
      // alert("Update!!");
      const formData = new FormData();
      formData.append("file", this.selectedFile);
      fetch("http://localhost:8082/upload", {
        method: "POST",
        mode: "cors", //no-cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // headers: {
        //   "Content-Type": "application/json",
        // },
        body: formData,
      })
        .then((response) => {
          console.log(response);
          // if (response.ok) {
          return response.json();
          // }
          // throw new Error("Network response was not ok.");
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(`error: ${error}`);
        });
    },
    handleFileChange(e) {
      this.filename = e.target.files[0].name;
      this.selectedFile = e.target.files[0];
    },

    async loadDataFromServer(){
      try {
        const result = await axios.get(`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${this.page}`)
        if(result.data.items.length) {
          this.trendingRepos.push(...result.data.items);
          this.page++;
        } else {
          this.noResult = true;
          this.message = "No result found";
        }
      } catch(err) {
        this.noResult = true;
        this.message = "Error loading data";
      }
    }

  },
    mounted() {
    this.loadDataFromServer()
  }
};
</script> -->
