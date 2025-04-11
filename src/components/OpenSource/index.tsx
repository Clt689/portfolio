import SectionTitle from "../SectionTitle";
import OpenSourceItem from "./OpenSourceItem";

import { DataProps } from "@/types";

const OpenSource = ({ opensource }: Pick<DataProps, "opensource">) => {
  return (
    <div>
      <SectionTitle>🔗 Open Source Contributes</SectionTitle>
      <div className="flex flex-col gap-24">
        {[...opensource].reverse().map((opensource) => (
          <OpenSourceItem key={opensource.id} {...opensource} />
        ))}
      </div>
    </div>
  );
};

export default OpenSource;
