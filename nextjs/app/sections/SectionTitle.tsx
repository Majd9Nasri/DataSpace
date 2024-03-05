"use client";

import { createMoveToIdFunction } from "../../lib/clientUtility";
import { SectionTitleHeading } from "./SectionTitle.style";

type SectionTitleProps = {
  title: string;
  targetId: string;
};

export function SectionTitle({ title, targetId }: SectionTitleProps) {
  return (
    <SectionTitleHeading onClick={createMoveToIdFunction(targetId)}>
      {title}
    </SectionTitleHeading>
  );
}
