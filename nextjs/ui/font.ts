import { Noto_Color_Emoji, Raleway } from "next/font/google";

export const raleway = Raleway({ subsets: ["latin"] });

export const notoColorEmoji = Noto_Color_Emoji({
  subsets: ["emoji"],
  weight: "400",
});
