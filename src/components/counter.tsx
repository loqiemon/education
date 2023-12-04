import React, {FunctionComponent} from "react";
import classes from "./style.module.scss";
interface OwnProps {}

type Props = OwnProps;

const counter: FunctionComponent<Props> = props => {
  return (
    <div className={classes.btn}>
      <h1>counter</h1>
    </div>
  );
};

export default counter;
