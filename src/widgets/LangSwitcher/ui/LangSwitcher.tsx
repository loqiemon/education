import cls from "./LangSwitcher.module.scss";
import {Button} from "@shared/ui/Button";
import {useTranslation} from "react-i18next";
interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher = ({className}: LangSwitcherProps) => {
  const {t, i18n} = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return <Button onClick={toggleLanguage}>{t("Язык")}</Button>;
};

export {LangSwitcher};
