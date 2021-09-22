import { css } from "@emotion/css";
import React, { FC } from "react";

type Props = {
  color?: string;
  size?: number;
  top?: string;
  left?: string;
};

export const Spinner: FC<Props> = ({ color, size, top, left }) => (
  <div
    className={css`
      width: ${size || 30}px;
      height: ${size || 30}px;
      display: block;
      box-sizing: border-box;
      position: relative;
      margin: 0 auto;
      margin-top: ${top || "0px"};
      margin-left: ${left || "auto"};
      &:before {
        border-radius: 50%;
        content: " ";
        width: ${size || 30}px;
        height: ${size || 30}px;
        display: inline-block;
        box-sizing: border-box;
        border-style: solid;
        border-width: ${size ? size / 7.5 : 4}px;
        border-color: ${color || "white"};
        opacity: 0.1;
        position: absolute;
        top: 0;
        left: 0;
      }
      &:after {
        border-radius: 50%;
        content: " ";
        width: ${size || 30}px;
        height: ${size || 30}px;
        display: inline-block;
        box-sizing: border-box;
        border-style: solid;
        border-width: ${size ? size / 7.5 : 4}px;
        border-color: transparent;
        border-top-color: ${color || "white"};
        position: absolute;
        top: 0;
        left: 0;
        animation: load-animate 1.1s ease-in-out infinite;
      }
      @-webkit-keyframes load-animate {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      @keyframes load-animate {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
    `}
  />
);
