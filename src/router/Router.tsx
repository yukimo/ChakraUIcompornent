import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { Login } from "../compornents/pages/Login";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../compornents/pages/Page404";
import { HeaderLayout } from "../compornents/templates/HeaderLayout";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      {/* 以下はパスと内容を一致させる記述のみ */}
      <Route exact path="/">
        <Login />
      </Route>
      <Route //homeヘッダー内容のリンク先を配列で示している
        path="/home"
        render={({ match: { url } }) => (
          <Switch>
            {homeRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {/* ここまではリンクパスと中身のみ */}
                <HeaderLayout>{route.children}</HeaderLayout>
                {/* headerlayoutテンプレートでなぜチルドレンを挟むのかわからない。
                ただこの箇所にはhome配下の表示ページが記載されるので、headerlayoutのテンプレートに
                ヘッダーの下にhome配下が記載されることが書かれている*/}
                {/* home配下にのみ表示されるhedderのビジュアルとその中身のテンプレートを読み込んでいる
                （なら<headerlayout />でよくね？） */}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
