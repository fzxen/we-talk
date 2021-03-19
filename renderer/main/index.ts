import App from "./app.vue";
import { initApp } from "../_common/index";

import router from "./router";
import store from "_common/models/index";
import "./index.scss";

const app = initApp(App);
app.use(router).use(store).mount("#body-container");
