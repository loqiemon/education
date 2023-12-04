import {FunctionComponent, Suspense} from "react";
import {Routes, Route, Link} from "react-router-dom";

import "./styles/index.scss";
import Counter from "./components/counter";
import {AboutPageAsync} from "./pages/AboutPage/AboutPageAsync";
import {useTheme} from "./theme/useTheme";

interface OwnProps {}

type Props = OwnProps;

const App: FunctionComponent<Props> = props => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to="/about">About</Link>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route
            path="/"
            element={<Counter />}
          />
          <Route
            path="/about"
            element={<AboutPageAsync />}
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
