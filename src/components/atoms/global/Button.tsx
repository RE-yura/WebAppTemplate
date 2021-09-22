import { css } from "@emotion/css";
import Link from "next/link";
import React, { FC } from "react";

type Props = {
  href: string;
  padding: string;
  margin: string;
  color: string;
  bg: string;
  position: string;
  top: string;
  bottom: string;
  right: string;
  left: string;
  radius: string;
} & JSX.IntrinsicElements["button"];

export const Button: FC<Partial<Props>> = ({ children, onClick, ...props }) => {
  const Container = (
    <button
      className={css`
        background-color: ${props.bg || "#2b2b2e"};
        color: ${props.color || "#2b2b2e"};
        padding: ${props.padding || "0 2px"};
        margin: ${props.margin || "0"};
        border-radius: ${props.radius || "4px"};
        cursor: pointer;
        display: flex;
        flex-direction: column;
        position: ${props.position || "unset"};
        top: ${props.top || "unset"};
        bottom: ${props.bottom || "unset"};
        left: ${props.left || "unset"};

        :focus {
          outline: none;
        }
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );

  return props.href ? <Link href={props.href}>{Container}</Link> : <>{Container}</>;
};
