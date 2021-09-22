import { css, cx } from "@emotion/css";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { FC } from "react";

type Props = {
  href: string;
  text: string;
};

export const LinkButton: FC<Props> = ({ href, text }) => (
  <Link href={href}>
    <div
      className={cx(
        "flex flex-row items-center justify-between w-full h-16 px-8 text-lg cursor-pointer",
        css`
          :hover {
            background-color: rgba(255, 255, 255, 0.3);
          }
        `,
      )}
    >
      <span>{text}</span>
      <div>
        <FontAwesomeIcon className="angle-right" icon={faAngleRight} />
      </div>
    </div>
  </Link>
);
