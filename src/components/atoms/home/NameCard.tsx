import { Spinner } from "components/atoms/global/Spinner";
import React, { FC } from "react";

type Props = {
  loading: boolean;
  name: string;
};

export const NameCard: FC<Props> = ({ loading, name }) => (
  <div className="bg-white rounded-md w-4/5 max-w-[800px] h-[92px] py-4 flex justify-center items-center font-bold mt-10">
    <div className="ml-8 text-sm text-right">ユーザ名</div>
    <div className="w-9/12">
      {!loading ? (
        <>
          <div className="text-2xl text-center">{name}</div>
        </>
      ) : (
        <Spinner size={40} color="gray" />
      )}
    </div>
  </div>
);
