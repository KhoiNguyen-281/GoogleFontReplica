import style from "./LandingPageFontRow.module.css";

interface FontRowProps {
  family: string;
  variants: string[];
  url: string;
}

// style={{ fontFamily: `${family}, ${category}` }}

export default function LandingPageFontRow(props: FontRowProps) {
  const { family, variants, url } = props;
  return (
    <div className="flex justify-center w-full">
      <style>
        {`@font-face {
          font-family: "${family}";
          font-style: normal;
          font-weight: normal;
          src: url("${url}");
        }`}
      </style>
      <div className={style.font_row_main__container}>
        <div className="flex items-center justify-start gap-3 h-fit">
          <div
            className="mb-1 text-2xl text-center text-white"
            //   style={{ fontFamily: "Roboto" }}
          >
            {family}
          </div>
          <div className="text-lg text-center text-slate-500">
            {variants.length} styles
          </div>
        </div>
        <div
          className={`${style.font_row__text_field}`}
          style={{
            fontFamily: `${family}`,
          }}
        >
          Everyone has the right to freedom of thought, conscience and religion;
          this right includes freedom to change his religion or belief, and
          freedom, either alone or in community with others and in public or
          private, to manifest his religion or belief in teaching, practice,
          worship and observance. Everyone has the right to freedom of opinion
          and expression; this right includes freedom to hold opinions without
          interference and to seek, receive and impart information and ideas
          through any media and regardless of frontiers. Everyone has the right
          to rest and leisure, including reasonable limitation of working hours
          and periodic holidays with pay.
        </div>
      </div>
    </div>
  );
}
