"use client";
import twemoji from "twemoji";
import { TwemojiSpan } from "./Twemoji.style";

export function Twemoji({ emoji }: { emoji: string }) {
  return (
    <TwemojiSpan
      dangerouslySetInnerHTML={{
        __html: twemoji.parse(emoji, {
          folder: "svg",
          ext: ".svg",
          attributes: () => ({
            alt: emoji,
          }),
        }),
      }}
    />
  );
}
