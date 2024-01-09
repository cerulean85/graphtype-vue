<template>
  <div class="container-layout">
    <div class="container-lg favorite-contents-layout">
      <div class="row gx-0 mb-3" v-for="site in sites" :key="site.no">
        
        <div class="col-1" style="width: 50px;">
          <img :src="site.thumb_url" style="width: 50px;">
        </div>
        <div class="col-11 ms-3">
          <div class="row gx-0">
            <a :href="site.url" target="_blank">{{ site.name }}</a>
          </div>
          <div class="row gx-0">{{ site.desc }}</div>
        </div>
              
      </div>
    </div>
</div>
</template>

<script setup lang="ts">


const sites = [
  {
    no: 1, name: "OpenAI: ChatGPT", url: "https://chat.openai.com/", desc: "Text-to-Text 생성형 AI - 챗GPT입니다.", thumb_url: "https://zhdev-gallary.s3.ap-northeast-2.amazonaws.com/images/%EC%B1%97gpt%EB%A1%9C%EA%B3%A0.svg"
  },

  {
    no: 2, name: "Google: Bard", url: "https://bard.google.com/", desc: "Text-to-Text 생성형 AI - 바드(Bard)입니다.", thumb_url: "https://zhdev-gallary.s3.ap-northeast-2.amazonaws.com/images/%EB%B0%94%EB%93%9C%EB%A1%9C%EA%B3%A0.svg"
  },
  {
    no: 3, name: "Leonardo AI", url: "https://leonardo.ai/", desc: "Text-to-Image 생성형 AI - 레오나르도 AI입니다.", thumb_url: "https://zhdev-gallary.s3.ap-northeast-2.amazonaws.com/images/%EB%A0%88%EC%98%A4%EB%82%98%EB%A5%B4%EB%8F%84ai%EB%A1%9C%EA%B3%A0.jpg"
  },
  {
    no: 4, name: "미드저니", url: "https://www.midjourney.com/", desc: "Text-to-Image 생성형 AI - 미드저니입니다.", thumb_url: "https://zhdev-gallary.s3.ap-northeast-2.amazonaws.com/images/%EB%AF%B8%EB%93%9C%EC%A0%80%EB%8B%88%EB%A1%9C%EA%B3%A0.png"
  },
  {
    no: 5, name: "클로바 더빙", url: "https://clovadubbing.naver.com/", desc: "Text-to-Speech 생성형 AI - 클로바 더빙입니다.", thumb_url: "https://zhdev-gallary.s3.ap-northeast-2.amazonaws.com/images/%ED%81%B4%EB%A1%9C%EB%B0%94%EB%8D%94%EB%B9%99%EB%A1%9C%EA%B3%A0.png"
  }
]


</script>
<style lang="scss">
@import '../../styles/variables.scss';
@import url($font_noto-sans);



.favorite-contents-layout {
  width: 100%;
  height: 100%;
  background-color: white;
}

</style>

