import ReactDom from "react-dom";
import "./style/index.css";

export default function render(element: JSX.Element, selector: string) {
  ReactDom.render(element, document.querySelector(selector));
}
