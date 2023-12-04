import React, {FunctionComponent} from "react";
import Counter from "./components/counter";

interface OwnProps {}

type Props = OwnProps;

const App: FunctionComponent<Props> = props => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
