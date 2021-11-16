import { Home } from "../compornents/pages/Home";
import { Page404 } from "../compornents/pages/Page404";
import { Setting } from "../compornents/pages/Setting";
import { UserManagement } from "../compornents/pages/UserManagement";

//これは配下ページの配列。メニュー項目であるが、ルーターなので見せかけではなくリンクパスと内容をまとめて定義していく
export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />
  },
  /* {
    path: "/user_manegement",
    exact: false,
    children: <UserManegement />
  }, */
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];
