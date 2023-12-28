<!-- eslint-disable prettier/prettier -->
<template>
  <div id="app" class="layout-app">

    <!-- <header>
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
    </header> -->

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <hr>
      <p>&copy; 2023 Awesome Mate. All rights reserved. Designed by kkennib.</p>
    </footer>

  </div>
</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'

interface Category {
  id: number;
  name: string;
  selected: boolean;
}

interface ColorStyle {
  color: string;
}

const categories = ref([
  { id: 0, name: "About", to: "/about", selected: false },  
  { id: 1, name: "Articles", to: "/article_list", selected: false },
  { id: 2, name: "MeFeed", to: "/mefeed", selected: true },  
  // { id: 1, name: "Release", to: "/release", selected: false },

]);

function selectMainMenu(categoryId: number): void {
  categories.value.forEach((e) => {
    e.selected = e.id == categoryId ? true : false;
  });
}

function changeMainMenuColor(category: Category): ColorStyle {
  return {
    color: category.selected ? "black" : "#f5f5f5",
  };
}

onMounted(() => {
  changeMainMenuColor(categories.value[0]);
  selectMainMenu(2);  
});

const router = useRouter();
// router.push('/mefeed');
router.push('/game/lots');

</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
