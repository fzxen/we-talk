import React, { Suspense } from "react";
import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import TitleBar from "_common/components/TitleBar/TitleBar";

import style from "./app.module.css";

const Message = React.lazy(() => import("./views/Message/Message"));
const Friends = React.lazy(() => import("./views/Friends/Friends"));
const Favorite = React.lazy(() => import("./views/Favorite/Favorite"));
const AsideMenuBar = React.lazy(
  () => import("@/_common/components/AsideMenuBar/AsideMenuBar")
);

export default function App() {
  return (
    <Suspense fallback={"loading..."}>
      <TitleBar />
      <HashRouter>
        <AsideMenuBar />
        <main className={style.main}>
          <Redirect path="/" to="/message" />
          <Switch>
            <Route path="/message" component={Message} />
            <Route path="/friends" component={Friends} />
            <Route path="/favorite" component={Favorite} />
          </Switch>
        </main>
      </HashRouter>
    </Suspense>
  );
}
