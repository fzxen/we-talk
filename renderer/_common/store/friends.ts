import { useStore } from "canglin";
import { useCallback, useMemo } from "react";
import cnchar from "cnchar";

const initialState = {
  list: [
    {
      id: "1",
      name: "餐桌上的小雨",
      avatar: "http://api.btstu.cn/sjtx/api.php?_t=friend",
      type: "friend",
      gender: 1, // 0:female 1:male
      desc: "一个懂设计的朋友",
      comment: "小雨",
      region: "广州 广东",
      weChatId: "ajie100101010101",
      source: "qq",
    },
    {
      id: "2",
      name: "爱吃甜食的大王",
      avatar: "http://api.btstu.cn/sjtx/api.php?_t=friend",
      type: "friend",
      gender: 1, // 0:female 1:male
      desc: "爱做梦，发呆",
      comment: "王哥",
      region: "朝阳 北京",
      weChatId: "wang2983948293",
      source: "qq",
    },
    {
      id: "3",
      name: "宝哥来了",
      avatar: "http://api.btstu.cn/sjtx/api.php?_t=friend",
      type: "friend",
      gender: 1, // 0:female 1:male
      desc: "爱做梦，发呆",
      comment: "阿宝",
      region: "朝阳 北京",
      weChatId: "wang2983948293",
      source: "group",
    },
  ],

  category: [
    {
      name: "联系人",
      key: "friend",
    },
    {
      name: "公众号",
      key: "official",
    },
    {
      name: "群聊",
      key: "group",
    },
    {
      name: "企业微信",
      key: "work",
    },
  ],

  activeCategory: "friend",
  activeListId: "1",
};

export function useFriendsStore() {
  const [state, setState] = useStore("friends", initialState);

  const list = useMemo(() => {
    const ret: { [props: string]: Array<typeof initialState["list"][0]> } = {};
    for (const l of state.list) {
      const firstLetter: string = cnchar.spell(l.comment || l.name)?.[0] ?? "#";
      if (!ret[firstLetter]) ret[firstLetter] = [];
      ret[firstLetter].push(l);
    }
    const ans = Object.entries(ret);
    ans.sort();
    return ans;
  }, [state.list]);
  const activeFriend = useMemo(
    () => state.list.find((l) => l.id === state.activeListId),
    [state.list, state.activeListId]
  );
  const activeListId = useMemo(() => state.activeListId, [state.activeListId]);

  const category = useMemo(() => {
    const category = state.category;

    const map = new Map<string, number>();
    for (const l of state.list) {
      const count = map.get(l.type) ?? 0;
      map.set(l.type, count + 1);
    }
    return category.map((c) => ({ ...c, ...{ count: map.get(c.key) ?? 0 } }));
  }, [state.category, state.list]);
  const activeCategory = useMemo(() => state.activeCategory, [
    state.activeCategory,
  ]);

  const setListActive = useCallback(
    (key: string) => {
      setState((state) => ({ ...state, ...{ activeListId: key } }));
    },
    [setState]
  );
  const setCategoryActive = useCallback(
    (key: string) => {
      setState((state) => ({ ...state, ...{ activeCategory: key } }));
    },
    [setState]
  );

  return {
    state,
    category,
    activeCategory,

    list,
    activeListId,
    activeFriend,

    setListActive,
    setCategoryActive,
  };
}
