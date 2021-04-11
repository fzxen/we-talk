import React from "react";

import DivideLayout from "../../components/Layout/DivideLayout";

import Aside from "../../components/FavoriteAside/FavoriteAside";
import Main from "../../components/FavoriteMain/FavoriteMain";

export default function Favorite() {
  return (
    <DivideLayout>
      {{
        aside: <Aside />,
        main: <Main />,
      }}
    </DivideLayout>
  );
}
