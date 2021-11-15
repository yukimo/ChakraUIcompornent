import { memo, ReactNode, VFC } from "react";
import { Header } from "../organisms/layout/Header";

type Props = {
  //この行はVFCで定義していく型の中を宣言している
  children: ReactNode; //型の中にチルドレンを含ませる。チルドレンのようなタグを使用したものを使うのでReactNodeを使用する
};

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      {/*  childreのようなタグで囲った型の宣言になるので上記でReactnodeを宣言する*/}

      {}
    </>
  );
});
