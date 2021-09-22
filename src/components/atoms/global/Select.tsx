import { css, cx } from "@emotion/css";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

type Props = {
  defaultValue?: string;
  error?: string;
  spaceForError?: boolean; // エラー分のスペースを確保しておくか
} & JSX.IntrinsicElements["select"];

export const Select: FC<Props> = ({
  value,
  defaultValue,
  children,
  error,
  spaceForError,
  className,
  ...props
}) => (
  <div>
    <div className={`relative flex flex-row items-center ${className}`}>
      <select
        className={cx(
          `cursor-pointer text-sm rounded outline-none appearance-none w-full h-7 leading-7 truncate bg-white ${
            value !== "" ? "text-primary" : "text-lightGray"
          }`,
          css`
            padding-right: 30px;
            padding-left: 8px;
            border: 1px solid #d9d9d9;
          `,
        )}
        value={value}
        defaultValue={defaultValue}
        {...props}
      >
        {children}
      </select>
      <div className="mt-1 -ml-5 pointer-events-none text-lightGray">
        <FontAwesomeIcon className="ml-px transform -translate-y-1" icon={faSortDown} />
      </div>
    </div>
    {(error || spaceForError) && (
      <div
        className={cx(
          "text-xs text-error",
          css`
            margin-left: 4px;
            min-height: 16px;
            white-space: nowrap;
          `,
        )}
      >
        {error}
      </div>
    )}
  </div>
);
