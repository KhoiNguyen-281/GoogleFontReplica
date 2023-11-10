import { Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SortedFonts } from "../../API/GetAllFont";
import DetailPageHeader from "../../Components/DetailPageHeader/DetailPageHeader";
import HiddenFilter from "../../Components/HiddenFilter/HiddenFilter";
import LandingPageFontRow from "../../Components/LandingPage/LandingPageFont/LandingPageFontRow";
import NavBar from "../../Components/NavBar";
import style from "../FontDetailPage/FontDetailPage.module.css";

export default function LandingPage() {
  const [fonts, setFonts] = useState<any[]>([]);
  const [width, setWidth] = useState<number>(80);
  const [display, setDisplay] = useState<string>("none");
  const [maxWidth, setMaxWidth] = useState<number>(0);
  const [pX, setPX] = useState<number>(0);
  const [pY, setPY] = useState<number>(0);

  useEffect(() => {
    SortedFonts({ sort: "popularity", setFonts: setFonts });
  }, [fonts]);

  const items = fonts.map((font, key) => (
    <Link key={key} to={`/speciment/${font.family}`}>
      <Suspense fallback={<div></div>}>
        <LandingPageFontRow
          family={font.family}
          variants={font.variants}
          url={font.menu}
        ></LandingPageFontRow>
      </Suspense>
    </Link>
  ));

  const onClick = () => {
    if (maxWidth === 0) {
      setDisplay("flex");
      setMaxWidth(20);
      setPX(24);
      setPY(20);
      setWidth(100);
    } else {
      setDisplay("none");
      setMaxWidth(0);
      setWidth(80);
      setPX(0);
      setPY(0);
    }
  };

  return (
    <div className="flex w-full h-screen bg-[#202124] justify-end">
      <NavBar></NavBar>
      {/* <div className="w-[315px] ml-24"> */}
      <HiddenFilter
        pX={pX}
        pY={pY}
        display={display}
        width={maxWidth}
      ></HiddenFilter>
      {/* </div> */}
      <div className={style.div__main__container}>
        <div className="flex justify-center w-full">
          <div
            className="transition-all duration-300 ease-in-out"
            style={{ width: `${width}%` }}
          >
            <DetailPageHeader></DetailPageHeader>
          </div>
        </div>
        <div className="flex items-center justify-center w-full my-5">
          <div
            style={{ width: `${width}%` }}
            className="transition-all duration-300 ease-in-out"
          >
            <button className={style.div__filter_button} onClick={onClick}>
              <span className="material-icons-outlined">tune</span>
              <span>Filters</span>
            </button>
          </div>
        </div>
        <div className="w-full h-[90%] pt-6 overflow-x-hidden overflow-y-scroll flex justify-center ">
          <div
            className="transition-all duration-300 ease-in-out h-fit"
            style={{
              width: `${width}%`,
            }}
          >
            {items}
          </div>
        </div>
        d
      </div>
    </div>
  );
}
