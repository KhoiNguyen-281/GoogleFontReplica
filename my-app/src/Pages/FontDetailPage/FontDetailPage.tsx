import { Suspense, useEffect, useRef, useState } from "react";
import DetailPageHeader from "../../Components/DetailPageHeader/DetailPageHeader";
import DetailPageTitle from "../../Components/DetailPageTitle/DetailPageTitle";
import NavBar from "../../Components/NavBar";

import { useParams } from "react-router-dom";
import { FontDetail } from "../../API/GetAllFont";
import DetailPageVariationRow from "../../Components/DetailPageVariationRow/DetailPageVariationRow";
import style from "./FontDetailPage.module.css";

export default function FontDetailPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const holderRef = useRef<HTMLDivElement>(null);
  const rangeRef = useRef<HTMLInputElement>(null);

  const [text, setText] = useState<string>(
    "Whereas disregard and contempt for human rights have resulted"
  );

  const [fontDetail, setFontDetail] = useState<any>();

  const { family } = useParams<{ family: string }>();

  const [baseVar, setBaseVar] = useState<number>(12);

  useEffect(() => {
    FontDetail({ family: family as string, setFont: setFontDetail });
  }, [family, fontDetail]);

  const handleInput = () => {
    inputRef.current!.focus();
    holderRef.current!.style.transform =
      "translateY(-100%) translateX(-1rem) scale(0.8)";
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        inputRef.current.blur();
        if (inputRef.current.value === "") {
          holderRef.current!.style.transform =
            "translateY(0) translateX(0) scale(1)";
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  if (!fontDetail) {
    return <div>loading...</div>;
  }

  // const fontVariations: any[] = [];

  const fontVariations = [
    {
      textStyle: "normal",
      weight: "100",
    },
    {
      textStyle: "italic",
      weight: "100",
    },
    {
      textStyle: "normal",
      weight: "300",
    },
    {
      textStyle: "italic",
      weight: "300",
    },
    {
      textStyle: "normal",
      weight: "400",
    },
    {
      textStyle: "italic",
      weight: "400",
    },
    {
      textStyle: "normal",
      weight: "500",
    },
    {
      textStyle: "italic",
      weight: "500",
    },
    {
      textStyle: "normal",
      weight: "700",
    },
    {
      textStyle: "italic",
      weight: "700",
    },
    {
      textStyle: "normal",
      weight: "900",
    },
    {
      textStyle: "italic",
      weight: "900",
    },
  ];

  const items = fontVariations.map((item, key) => (
    <Suspense key={key} fallback={<div></div>}>
      <DetailPageVariationRow
        font={family as string}
        textStyle={item.textStyle}
        text={text}
        weight={item.weight}
        size={`${baseVar + 7}`}
        menu={`${fontDetail.menu}`}
      ></DetailPageVariationRow>
    </Suspense>
  ));

  return (
    <div className="flex w-full h-screen bg-[#202124] justify-end">
      <NavBar></NavBar>
      <div className={style.div__main__container}>
        <div className="flex justify-center w-full">
          <DetailPageHeader></DetailPageHeader>
        </div>
        <div className="w-full h-[90%] pt-6 overflow-x-hidden overflow-y-scroll flex flex-col items-center">
          <div className="w-[80%]">
            <DetailPageTitle family={family as string}></DetailPageTitle>
            <div className={style.input_sample}>
              <h2 className={style.input__title}>Styles</h2>
              <div className={style.div__input_and_change__size}>
                <div className={style.div__input} onClick={handleInput}>
                  <div className={style.place_holder} ref={holderRef}>
                    Type here to review text
                  </div>
                  <input
                    ref={inputRef}
                    className={style.input_field}
                    // value={text}
                    onChange={() => {
                      setText(inputRef.current!.value);
                    }}
                  ></input>
                </div>
                <div className={style.div__resize}>
                  <span className={style.div__current_size}>
                    {baseVar + 7}px
                  </span>
                  <input
                    type="range"
                    min="1"
                    max="293"
                    step={1}
                    className={style.div__resize__bar}
                    ref={rangeRef}
                    value={baseVar}
                    onChange={() => {
                      console.log(rangeRef.current!.value);
                      setBaseVar(Number(rangeRef.current!.value));
                    }}
                  ></input>
                </div>
              </div>
            </div>
            <div className=" w-full border-t-[1px] h-fit solid border-slate-600">
              {items}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
