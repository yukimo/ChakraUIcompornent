import { Home } from "../compornents/pages/Home";
import { Page404 } from "../compornents/pages/Page404";
import { Setting } from "../compornents/pages/Setting";
import { UserManegement } from "../compornents/pages/UserManegement";

//これは配下ページの配列。メニュー項目であるが、ルーターなので見せかけではなくリンクパスと内容をまとめて定義していく
export const homeRoutes = [
  {
    path: "/",
    exact: true,
    chldren: <Home />
  },
  {
    path: "/user_manegement",
    exact: false,
    chldren: <UserManegement />
  },
  {
    path: "/setting",
    exact: false,
    chldren: <Setting />
  },
  {
    path: "*",
    exact: false,
    chldren: <Page404 />
  }
];
