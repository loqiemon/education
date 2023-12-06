import {classNames} from "@shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import {AppLink, AppLinkTheme} from "@shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

const Navbar = ({className}: NavbarProps) => {
  return (
    <nav className={classNames(cls.navbar)}>
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to="/about"
      >
        About
      </AppLink>
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to="/"
      >
        Main
      </AppLink>
    </nav>
  );
};

export {Navbar};
