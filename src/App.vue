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

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" v-if="showNav">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">PlayBed</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            

            <li class="nav-item" v-for="category in bedCategories" :key="category.id">
              <router-link class="nav-link" 
              :class="{active: category.selected}" :to="category.to" 
              @click="() => {
                bedCategories.forEach( e => {
                  e.selected = false
                });
                category.selected = true
              }">{{ category.name }}</router-link>
            </li>

            <!-- <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li> -->
            <!-- <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li> -->
          </ul>
          <!-- <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form> -->
        </div>
      </div>
    </nav>

    <main>
      <router-view></router-view>
    </main>

    <!-- <footer>
      <hr>
      <p>&copy; 2023 Awesome Mate. All rights reserved. Designed by kkennib.</p>
    </footer> -->

  </div>
</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'

const showNav: any = ref(true);

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
  { id: 3, name: "BedLots", to: "/bed/lots", selected: false },
  { id: 4, name: "BedFavorite", to: "/bed/favorite", selected: false },
  // { id: 1, name: "Release", to: "/release", selected: false },

]);

const bedCategories = ref([
  { id: 1, name: "제비뽑기", to: "/bed/lots", selected: true },
  { id: 2, name: "유용한 사이트", to: "/bed/favorite", selected: false },
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
// router.push('/game/lots');
router.push("/bed/lots");

</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
