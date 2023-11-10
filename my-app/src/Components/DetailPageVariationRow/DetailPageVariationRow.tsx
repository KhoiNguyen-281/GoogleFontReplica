import { useEffect, useState } from "react";

interface VariableProps {
  font: string;
  weight: string;
  textStyle: string;
  text: string;
  size: string;
  menu: string;
  //   inputRef: MutableRefObject<HTMLInputElement | null>;
}

export default function DetailPageVariationRow(props: VariableProps) {
  const [type, setType] = useState<String>("");

  const { font, weight, textStyle, text, size, menu } = props;

  //   const [inputText, setInputText] = useState<string>(text);

  useEffect(() => {
    if (weight === "100") {
      setType("Thin");
    } else if (weight === "300") {
      setType("Light");
    } else if (weight === "400") {
      setType("Regular");
    } else if (weight === "500") {
      setType("Medium");
    } else if (weight === "700") {
      setType("Bold");
    } else if (weight === "900") {
      setType("Black");
    }
  }, []);

  return (
    <div className="w-full pt-4 pb-5 pl-4 border-b-[1px] solid border-slate-600 flex flex-col items-start h-fit">
      <style>
        {`@font-face {
          font-family: "${font}";
          src: url("${menu}")
        }`}
      </style>

      <div className="mb-5 text-sm text-[#9aa0a6] font-normal">
        {type} {weight} {textStyle}
      </div>

      <div
        className="w-full text-white transition-all bg-transparent outline-none h-fit text-start"
        style={{
          fontSize: `${size}px`,
          fontFamily: `${font}`,
          fontWeight: `${weight}`,
          fontStyle: `${textStyle}`,
        }}
      >
        {text}
      </div>
    </div>
  );
}
