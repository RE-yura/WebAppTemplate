import { css } from "@emotion/css";
import React, { FC } from "react";

type Props = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
};

export const AbsoluteContainer: FC<Props> = ({ children, ...props }) => (
  <div
    className={css`
      position: absolute;
      top: ${props.top || "unset"};
      bottom: ${props.bottom || "unset"};
      left: ${props.left || "unset"};
      right: ${props.right || "unset"};
    `}
  >
    {children}
  </div>
);
