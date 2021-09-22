import { css, cx } from "@emotion/css";
import React, { FC } from "react";

type Props = {
  color?: string;
  isMenuOpen: boolean;
  onClick: () => void;
};

export const Hamburger: FC<Props> = ({ color, isMenuOpen, onClick }) => (
  <a
    className={cx(
      isMenuOpen ? "is_active" : "",
      css`
        display: block;
        transition: all 0.4s;
        box-sizing: border-box;
        position: absolute;
        top: 16px;
        right: 16px;
        width: 26px;
        height: 20px;
        margin: auto 0;
        :hover {
          cursor: pointer;
        }
        & span {
          display: inline-block;
          transition: all 0.4s;
          box-sizing: border-box;
          position: absolute;
          left: 0;
          width: 100%;
          height: 4px;
          background-color: ${color || "white"};
          border-radius: 4px;
          margin: 0 auto;
          &:nth-of-type(1) {
            top: 0;
          }
          &:nth-of-type(2) {
            top: 50%;
            transform: translate(0%, -50%);
          }
          &:nth-of-type(3) {
            bottom: 0;
          }
        }
        &.is_active {
          & span {
            &:nth-of-type(1) {
              width: 45%;
              -webkit-transform: translate3d(2px, 10px, 0) rotate(405deg);
              transform: translate3d(2.5px, 3.5px, 0) rotate(405deg);
            }
            &:nth-of-type(2) {
              -webkit-transform: translate3d(-1px, 0, 0) rotate(-45deg);
              transform: translate3d(0px, -2px, 0) rotate(-45deg);
            }
            &:nth-of-type(3) {
              width: 45%;
              -webkit-transform: translate3d(23px, -9px, 0) rotate(405deg);
              transform: translate3d(12px, -3px, 0) rotate(405deg);
            }
          }
        }
      `,
    )}
    onClick={(e): void => {
      e.preventDefault();
      onClick();
    }}
  >
    <span />
    <span />
    <span />
  </a>
);
