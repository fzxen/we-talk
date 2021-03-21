import { runRenderer, buildMain } from "./handler";
import nodemon from "nodemon";

runRenderer()
  .then(() => buildMain("development"))
  .then(() => {
    nodemon("./node_modules/.bin/electron app/index.js");
  });
