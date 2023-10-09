<template>
  <div id="app" style="margin-top: 300px">
    <!-- <ArticleWriter></ArticleWriter>
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput> -->

    <!-- <a href="/about">1111111111</a> -->
    <!-- <router-link to="/about"> 1페이지로 </router-link> -->

    <!-- <About></About> -->

    <router-view></router-view>
    <!-- <TodoList></TodoList> -->
    <!-- <TodoFooter></TodoFooter> -->
  </div>
</template>

<script>
import ArticleWriter from "./components/todo/ArticleWriter.vue";
import TodoHeader from "./components/todo/TodoHeader.vue";
import TodoInput from "./components/todo/TodoInput.vue";
import TodoList from "./components/todo/TodoList.vue";
import TodoFooter from "./components/todo/TodoFooter.vue";
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ArticleWriter: ArticleWriter,
    // eslint-disable-next-line vue/no-unused-components
    TodoHeader: TodoHeader,
    // eslint-disable-next-line vue/no-unused-components
    TodoInput: TodoInput,
    // eslint-disable-next-line vue/no-unused-components
    TodoList: TodoList,
    // eslint-disable-next-line vue/no-unused-components
    TodoFooter: TodoFooter,
    // eslint-disable-next-line vue/no-unused-components
    // About: AboutView,
  },
};

// alert("????");
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
