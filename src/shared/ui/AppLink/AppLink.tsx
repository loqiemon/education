import cls from "./AppLink.module.scss";
import {Link, LinkProps} from "react-router-dom";
import {classNames} from "@shared/lib/classNames/classNames";
import {FC} from "react";
interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

const AppLink: FC<AppLinkProps> = props => {
  const {to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps} = props;
  console.log(theme);
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {[cls[theme]]: true}, [className])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export {AppLink};
