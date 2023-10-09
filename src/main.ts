import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
// import BootstrapVue3 from "bootstrap-vue-next";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
// createApp(App).use(store).use(router).use(BootstrapVue3).mount("#app");
