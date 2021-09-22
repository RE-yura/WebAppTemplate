import { css, cx } from "@emotion/css";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Select } from "components/atoms/global/Select";
import { TextField } from "components/atoms/global/TextField";
import { DefaultLayout } from "components/templates/DefaultLayout";
import { useInput } from "hooks/useInput";
import { range } from "lib/array";
import { getCurrentYear } from "lib/date";
import { Validation } from "lib/validation";
import { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useAppState, useNavState } from "redux/useState";
import { ModalEnum } from "types";

const AccountSettingPage: NextPage = () => {
  const { appState, getMe } = useAppState();
  const { setModal } = useNavState();

  useEffect(() => {
    getMe();
  }, [getMe]);

  const [showPassword, setShowPassword] = useState(false);

  const name = useInput(appState.me.data?.name || "");
  const year = useInput("");
  const month = useInput("");
  const email = useInput(appState.me.data?.email || "");
  const password = useInput("");

  const fieldNames = {
    name,
    year,
    month,
    email,
    password,
  };

  const handleSubmit = (event): void => {
    event.preventDefault();

    const errors = [];
    Object.keys(fieldNames).forEach((key) => {
      const error = Validation.formValidate(key, fieldNames[key].value, fieldNames[key].required);
      fieldNames[key].setError(error);
      if (error) errors.push(error);
    });
    if (errors.length > 0) return;

    const userInfo = {
      name: name.value,
      year: +year.value,
      month: +month.value,
      email: email.value,
      password: password.value,
    };
    // eslint-disable-next-line no-console
    console.log(userInfo);

    setModal(ModalEnum.FormSubmit);
  };

  return (
    <DefaultLayout notTop backButtonText="Top">
      <Head>
        <title>WebAppTemplate - フォームサンプル</title>
      </Head>

      <form className="mx-2 mt-8" onSubmit={handleSubmit}>
        <p className="w-full mt-5 mb-1 text-xs font-bold">ユーザ名</p>
        <TextField placeholder="" name="name" {...name} />

        <p className="w-full mt-5 mb-1 text-xs font-bold">メールアドレス</p>
        <TextField type="email" name="email" placeholder="sample@dremateams.com" {...email} />

        <p className="w-full mt-5 mb-1 text-xs font-bold">生年月</p>
        <div className="flex flex-row items-center w-8/12">
          <Select spaceForError defaultValue="" className="w-20 mt-2 mr-2" {...year}>
            <option value="" disabled>
              年
            </option>
            {range(1900, getCurrentYear() + 1).map((i) => (
              <option key={i} value={i.toString()}>
                {i}
              </option>
            ))}
          </Select>
          <Select spaceForError defaultValue="" className="w-20 mt-2" {...month}>
            <option value="" disabled>
              月
            </option>
            {range(1, 13).map((i) => (
              <option key={i} value={i.toString()}>
                {i}
              </option>
            ))}
          </Select>
        </div>

        <p className="w-full mt-5 mb-1 text-xs font-bold">パスワード</p>
        <div className="flex flex-row items-center">
          <TextField
            type={showPassword ? "text" : "password"}
            name="password"
            autoComplete="on"
            {...password}
          />
          <div className="w-6 mx-4 cursor-pointer">
            {showPassword ? (
              <FontAwesomeIcon onClick={(): void => setShowPassword(false)} icon={faEye} />
            ) : (
              <FontAwesomeIcon onClick={(): void => setShowPassword(true)} icon={faEyeSlash} />
            )}
          </div>
        </div>

        <div className="my-5 text-sm">
          「<a className="text-link">利用規約</a>」および「
          <a className="text-link">プライバシーポリシー</a>
          」をご確認の上、「同意して登録する」を押してください。
        </div>

        <button
          type="submit"
          className={cx(
            "block bg-primary rounded-[22px] text-white text-base",
            css`
              margin: 10px auto 0;
              padding: 10px 40px;
            `,
          )}
        >
          同意して登録する
        </button>
      </form>
    </DefaultLayout>
  );
};

// eslint-disable-next-line import/no-default-export
export default AccountSettingPage;
