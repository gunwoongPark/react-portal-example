import { ReactNode } from "react";
import ReactDom from "react-dom";

const Portal = (props: { children: ReactNode }) => {
  const element =
    typeof window !== "undefined" && document.querySelector("#portal");
  return element && props.children
    ? ReactDom.createPortal(props.children, element)
    : null;
};

export default Portal;
