import Image from "next/image";

import { CertificateProps } from "@/types";

const CertificateItem = ({ name, date, organizer, imgSrc }: CertificateProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <div className="flex flex-col gap-2">
        <div className="flex md:flex-col items-center md:items-start mr-4 gap-4">
          {imgSrc && (
            <Image
              src={imgSrc}
              width="200"
              height="200"
              alt={name}
              className="object-cover rounded-lg border-[1px] border-GRAY_LIGHT border-solid w-24 h-24"
            />
          )}
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <h3 className="mb-1">{name}</h3>
              <span>{date}</span>
            </div>
            <span className="text-gray-500">{organizer}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateItem;
