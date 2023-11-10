import style from "./HiddenFilter.module.css";

interface HiddenProps {
  display: string;
  width: number;
  pX: number;
  pY: number;
}

export default function HiddenFilter(props: HiddenProps) {
  const { display, width } = props;
  return (
    <div
      className={`${style.div__hidden_filter_main__container}`}
      style={{
        width: `${width}%`,
        padding: `${props.pX}px ${props.pY}px`,
      }}
    >
      <div className="w-full">
        
      </div>
    </div>
  );
}
