<!-- eslint-disable prettier/prettier -->
<template>
  <div id="app" class="layout-app">

    <header>
      <div class="layout-title centered-content">
        <div>Awesome Mate!</div>
      </div>
      <div class="layout-main-menu">
        <div v-for="category in categories" :key="category.id">
          <router-link class="router-main-menu-button" 
                      :to="category.to" :style="changeMainMenuColor(category)" 
                      @click="selectMainMenu(category.id)">
                      <div class="router-outer-inline-block">{{ category.name }}</div>
          </router-link>
        </div>
      </div>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <hr>
      <p>&copy; 2023 Awesome Mate. All rights reserved. Designed by kkennib.</p>
    </footer>

  </div>
</template>

<script>
export default {
  // App 컴포넌트 로직 추가
  data() {
    return {
      categories: [
        { id: 0, name: "About", to: "/about", selected: false },
        { id: 1, name: "Articles", to: "/article_list", selected: true },
        { id: 2, name: "Release", to: "/release", selected: false },
      ],
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    selectMainMenu(categoryId) {
      this.categories.forEach((e) => {
        e.selected = e.id == categoryId ? true : false;
      });
    },
    changeMainMenuColor(category) {
      // isActive 값에 따라 동적으로 스타일 객체 생성
      return {
        color: category.selected ? "black" : "#f5f5f5",
        // 추가적인 스타일 속성들을 필요에 따라 추가할 수 있습니다.
      };
    },
  },
  mounted() {
    // 컴포넌트가 마운트될 때 클릭 이벤트를 발생시킴
    this.changeMainMenuColor(this.categories[0]);
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
