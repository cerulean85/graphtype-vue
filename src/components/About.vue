<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="main">
    <h1 class="title">About.</h1>
    <hr />
    <ul>
      <li>닉네임: kkennib</li>
      <li>관심사: Software Engineering / AI / Data Pipeline</li>
      <li>
        근래 주요하게 다루는 툴: C#/WPF/SQLite(업무), Java/SpringBoot,
        JavaScript/Vue.js, DynamoDB
      </li>
      <li>
        그 외 다뤄본 툴: Python, Nodejs, MongoDB, Numpy, Pandas, NetworkX,
        Django, PHP, Nginx, Nginx, ElasticSearch, Hadoop, AWS
        EC2/S3/DynamoDB/Lambda, gRPC, Kafka, Redis
      </li>
      <li>
        다뤄본 이론 및 개념: SNA(사회 연결망 분석), 머신러닝(~LSTM까지),
        기초통계, 탐색적 분석, 임베딩, 텍스트마이닝 등
      </li>
      <li>공부중: ChatGPT, DALL-E 등 Text-to-X 모델</li>
      <li>연구중: Generative AI와 미래</li>
      <li>근무중: 물류 분야 SW 개발</li>
      <li>진행중인 토이 프로젝트: 개인 블로그, 포트폴리오</li>
      <li>자격증: PE 준비중</li>
      <li>다루고 싶은 툴: Kubernetes</li>
    </ul>
    <h2>비전</h2>
    <ul>
      <li>
        SW에 대한 인사이트를 연구하고 지식과 지혜, 경험을 사람들과 나누는 일
      </li>
      <li>AI를 적극 활용하며 다양한 콘텐츠를 만들고 공유할 것</li>
      <li>클라우드 네이티브의 프로그래머 될 것</li>
    </ul>
  </div>

  <BlogPost :title="ttl"></BlogPost>
  <BlogPost v-bind="post"></BlogPost>
  <div :style="{ fontSize: postFontSize + 'em' }">
    <blog-post 
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      @enlarge-text="postFontSize += 0.1">
      이히히히힠ㅋ
    </blog-post>
    
  </div>

</template>

<script setup lang="ts">

import { ref, computed } from 'vue'

const yetAnotherSum: (a: number, b:number) => number = (a, b) => (a + b);

function square(value: number, returnString: boolean = false): string | number {
  if (returnString)
    return "String";
  return value;
}

const rst1: string | number = square(5);
const rst2: string | number = square(5, true);
// const title = ref("ㅎㅎㅎㅎㅎㅎㅎㅎ")

const post = ref({
  title: "ㅂㅂㅂㅂㅂㅂㅂ",
  likes: 50
});

post.value.title = "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ22222222"
const ttl = computed(() => post.value.title + 'wwwq' )

import BlogPost from './BlogPost.vue'

const posts = ref([
  { id: 1, title: 'Vue와 함께한 나의 여행' },
  { id: 2, title: 'Vue로 블로깅하기' },
  { id: 3, title: 'Vue가 재미있는 이유' },
])

const postFontSize = ref(1)



</script>

<style lang="scss">
@import "@/styles/contents.scss";
</style>
