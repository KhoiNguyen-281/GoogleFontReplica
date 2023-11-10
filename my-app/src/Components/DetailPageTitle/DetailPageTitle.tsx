import style from "./DetailPageTitle.module.css";

interface DetailPageTitleProps {
  family: string;
}

export default function DetailPageTitle(props: DetailPageTitleProps) {
  const { family } = props;
  return (
    <div className={style.div__specimen__header}>
      <div className={style.div__header__title}>
        <h1 className={style.h1__header__title}>{family}</h1>
        <div className={style.font__author}>
          Designed by <span>Christian Robertson</span>
        </div>
      </div>
      <div className={style.div__header__hero}>
        <div className={style.text_sample}>
          Whereas disregard and contempt for human rights have resulted
        </div>
      </div>
    </div>
  );
}
