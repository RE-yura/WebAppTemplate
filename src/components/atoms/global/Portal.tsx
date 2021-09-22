import React, { useLayoutEffect, useState } from "react";
import ReactDOM from "react-dom";

export interface PortalProps {
  rootElement?: HTMLElement;
  containerName?: string;
}

export const Portal: React.FC<PortalProps> = ({
  rootElement = document.body,
  containerName = "div",
  children,
}) => {
  const [container] = useState(() => document.createElement(containerName));

  useLayoutEffect(() => {
    rootElement.appendChild(container);
    return (): void => {
      rootElement.removeChild(container);
    };
  }, [container, rootElement]);

  return ReactDOM.createPortal(children, container);
};
