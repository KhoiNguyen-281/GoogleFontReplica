import axios from "axios";

export interface FontData {
  family: string;
  variants: string[];
  subsets: string[];
  category: string;
  menu: string;
}

interface FontProviderProps {
  sort: string;
  setFonts: React.Dispatch<React.SetStateAction<FontData[]>>;
}

interface FontDetailProp {
  family: string;
  setFont: React.Dispatch<React.SetStateAction<FontDetailProps>>;
}

export interface FontDetailProps {
  family: string;
  variants: string[];
}

const FontDetail = async (props: FontDetailProp) => {
  const { family, setFont } = props;
  const config = {
    method: "GET",
    url: `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBBI8w-54mGbND5h_0Rg6qMuC949sWhjXY&family=${family}`,
  };

  try {
    const res = await axios.request(config);
    const data = res.data.items;
    setFont(data);
  } catch (error) {
    console.log(error);
  }
};

const SortedFonts = async (props: FontProviderProps) => {
  const { sort, setFonts } = props;

  const config = {
    method: "GET",
    url: `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBBI8w-54mGbND5h_0Rg6qMuC949sWhjXY&sort=${sort}`,
  };

  try {
    const res = await axios.request(config);
    const data = res.data.items;
    const fonts = data.map((font: FontData) => {
      return {
        family: font.family,
        variants: font.variants,
        subsets: font.subsets,
        category: font.category,
        menu: font.menu,
      };
    });
    setFonts(fonts);
  } catch (error) {
    setFonts([]);
  }
};

export { FontDetail, SortedFonts };
