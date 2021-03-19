import { ref, onMounted } from "vue";

export default function useShow() {
  const show = ref(true);
  onMounted(() => {
    const dom = document.querySelector("html");

    let timer: NodeJS.Timeout;
    dom?.addEventListener("mousemove", () => {
      show.value = true;
      dom.style.removeProperty("cursor");

      timer && clearTimeout(timer);
      timer = setTimeout(() => {
        show.value = false;
        dom.style.setProperty("cursor", "none");
      }, 2000);
    });
  });

  return show;
}
