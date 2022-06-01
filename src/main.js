import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import bootstrap from "bootstrap";

const myApp = createApp(App);

myApp.use(router);
myApp.use(bootstrap);

myApp.mount("#app");
