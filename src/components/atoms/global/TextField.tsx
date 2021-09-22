import { css, cx } from "@emotion/css";
import React, { FC } from "react";

type Props = {
  type: "text" | "password" | "email" | "number";
  width: string;
  height: string;
  error: string;
  label: string;
  fontSize: string;
  padding: string;
  readOnly: boolean;
  textAlign: string;
} & JSX.IntrinsicElements["input"];

export const TextField: FC<Partial<Props>> = ({ type, error, ...props }) => (
  <div
    className={cx(
      "flex flex-col w-full",
      css`
        width: ${props.width ? props.width : "100%"};
      `,
    )}
  >
    <input
      className={css`
        height: ${props.height ? props.height : "40px"};
        line-height: ${props.height ? props.height : "40px"};
        box-sizing: border-box;
        -webkit-appearance: none;
        font-size: ${props.fontSize ? props.fontSize : "14px"};
        padding: ${props.padding || "0px 15px"};
        border-width: 0 0 1px 0;
        border-style: solid;
        color: #424242;
        background-color: white;
        border-color: ${error ? "red" : "#bfbfbf"};
        text-align: ${props.textAlign || "left"};
        outline: none;
      `}
      type={type}
      {...props}
    />
    <div
      className={cx(
        "text-xs text-error whitespace-nowrap",
        css`
          min-height: 16px;
        `,
      )}
    >
      {error}
    </div>
  </div>
);
