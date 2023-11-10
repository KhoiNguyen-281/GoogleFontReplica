import style from "./NavBar.module.css";

interface NavTabProps {
  icon: string;
  name: string;
}

export function NavTab(props: Readonly<NavTabProps>) {
  const { icon, name } = props;
  return (
    <div className={style.tab__container}>
      <div className={style.tab__icon}>
        <span className={`material-icons-outlined`}>{icon}</span>
      </div>
      <span className={style.tab__name}>{name}</span>
    </div>
  );
}

export default function NavBar() {
  return (
    <div className={style.nav__mainContainer}>
      <div className={style.nav__tabs}>
        <ul>
          <NavTab icon="font_download" name="Fonts"></NavTab>
          <NavTab icon="language" name="Noto"></NavTab>
          <NavTab icon="interests" name="Icons"></NavTab>
          <NavTab icon="schools" name="Knowledge"></NavTab>
          <NavTab icon="help" name="FAQ"></NavTab>
        </ul>
      </div>
      <div className={style.light__button}>
        <span className="text-white material-icons-outlined">light_mode</span>
      </div>
    </div>
  );
}
