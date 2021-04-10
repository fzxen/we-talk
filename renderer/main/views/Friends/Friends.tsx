import React from "react";
import DivideLayout from "../../components/Layout/DivideLayout";

import FriendsAside from "../../components/FriendsAside/FriendsAside";

import FriendsMain from "../../components/FriendsMain/FriendsMain";

export default function Friends() {
  return (
    <DivideLayout>
      {{ aside: <FriendsAside />, main: <FriendsMain /> }}
    </DivideLayout>
  );
}
