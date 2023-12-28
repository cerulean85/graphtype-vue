<template>
  <div class="list">
    <div class="option">
      <span class="count">게시글 {{ articleList.length }} / {{ totalItemCount }}건</span>

      <input class="search-box" @keyup.enter="search" type="text" v-model="searchText"/>
      <button class="search-button" @click="search">검색</button>

      <span class="write">
        <ArtticleEditor></ArtticleEditor>
        <!-- <button>글쓰기</button> -->
      </span>
    </div>
    <hr class="line" />
    <div class="scroll-container" @scroll="attachData">
      <ArticleListItem 
            v-for="article in articleList" 
            :key="article.articleId" 
            v-bind="article"
            @detail="detail(article.articleId)" />
    </div>
  </div>
  <div class="loading-indicator" v-show="loading" :style="{ height: (loading ? 40 : 0 ) + 'px' }">Loading...</div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue"
import { useRouter } from 'vue-router'
import ArticleListItem from './article/ArticleListItem.vue'
import ArtticleEditor from './article/ArticleEditor.vue'

let page: any = ref(1);
let loading: any = ref(false);
let totalPageCount: number = -1;
let totalItemCount: any = ref(0);
let articleList: any = ref([]);
let searchText: any = ref("");
let searching = () : boolean => ( searchText.value.length > 0 );

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
function showIndicate() { loading.value = true; }
function hideIndicate() { loading.value = false; }
function initData() { loadData(); }
function attachData(e: any) {
  const { scrollHeight, scrollTop, clientHeight } = e.target;
  const isAtTheBottom = scrollHeight === scrollTop + clientHeight;
  if (!isAtTheBottom) return;
  if (totalPageCount < page.value) return;
  loadData();
}

function search() {
  page.value = 1;
  articleList.value = [];
  totalPageCount = -1;
  totalItemCount.value = 0;
  loadData();
}

async function loadData() {

  if (loading.value)
    return;

  showIndicate();

  let prefixUrl = "http://localhost:8082/articles";
  let suffixUrl = searching() ? `search/${searchText.value}/${page.value}` : `basic/${page.value}`;
  await axios
    .get(`${prefixUrl}/${suffixUrl}`)
    .then((response) => {

      const resData = response.data;
      resData.list.forEach((e: { contents: string; inventory: any; }) =>  e.contents = getContents(e.inventory));          
      setTimeout(()=> {
        articleList.value.push(...resData.list);
        totalPageCount = resData.totalPageCount;
        totalItemCount.value = resData.totalItemCount;
        page.value++;
        hideIndicate();
      }, 1000)

    })
    .catch((error) => {
      console.error(error)
      hideIndicate();
    });
}

onMounted(() => {
  initData();
})
</script>

<style lang="scss">
@import "@/styles/contents.scss";
</style>
