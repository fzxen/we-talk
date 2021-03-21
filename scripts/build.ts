import { buildMain, buildRenderer, buildElectron } from "./handler";
import log from "./log";

Promise.all([buildRenderer(), buildMain("production")])
  .then(() => buildElectron())
  .then(() => {
    log.success("================应用 构建完毕================");
    process.exit();
  });
