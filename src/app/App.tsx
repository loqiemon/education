import {FunctionComponent, startTransition, Suspense} from "react";

import "./styles/index.scss";
import {useTheme} from "./providers/ThemeProvider";
import {classNames} from "@shared/lib/classNames/classNames";
import {AppRouter} from "@app/providers/router";
import {Navbar} from "@widgets/Navbar/";
import {Sidebar} from "@widgets/Sidebar";
import {useTranslation} from "react-i18next";
import {LangSwitcher} from "@widgets/LangSwitcher";

interface OwnProps {}

type Props = OwnProps;

const App: FunctionComponent<Props> = props => {
  const {theme} = useTheme();
  const {t, i18n} = useTranslation();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <div className="content-page">
          <LangSwitcher />
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
