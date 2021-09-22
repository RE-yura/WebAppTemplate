import React, { FC } from "react";

export const Footer: FC = () => (
  <footer className="w-full h-[50px] flex justify-center items-center bg-primary text-white">
    {" "}
    <p>{`© ${process.env.developer} ${new Date().getFullYear()}`}</p>
  </footer>
);
