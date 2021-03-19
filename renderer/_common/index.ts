import "./style/index.scss";
import { createApp, Component } from "vue";

export function initApp(root: Component) {
  const app = createApp(root);
  return app;
}
