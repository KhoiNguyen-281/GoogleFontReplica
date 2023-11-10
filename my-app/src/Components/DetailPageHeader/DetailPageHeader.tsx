import style from "./DetailPageHeader.module.css";

export default function DetailPageHeader() {
  return (
    <div className={style.header__main__container}>
      <div className={style.header__logo__container}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Google_Fonts_logo.svg"
          alt="Google Fonts"
        />
      </div>
      <div className={style.header__searchBar}>
        <div className={style.header__search__bar}>
          <div className={style.header__input__filter}>
            <div className={style.search_icon}>
              <span className="material-icons-outlined">search</span>
            </div>
            <div className={style.search_input}>
              <input
                type="text"
                placeholder="Search fonts"
                className={style.search__input}
              />
            </div>
            <div className={style.filter}>
              <div className="flex items-center justify-center text-white h-11 w-fit whitespace-nowrap">
                Sort by: most popular
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
