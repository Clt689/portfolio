import ContactItem from "../ContactItem";
import Introduce from "./Introduce";

import { DataProps } from "@/types";

const Information = ({ information }: Pick<DataProps, "information">) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row gap-10">
        <img
          alt="profile"
          src="/images/profile/profile_hblee.jpg"
          width={180}
          height={180}
          className=" object-cover"
        />

        <div className="flex flex-col gap-5">
          <h2 className="leading-[1.15]">
            안녕하세요,
            <br />
            <br />
            {/* 포지션에 맞게 문구를 수정해주세요. 혹은, 본인이 원하는 대로 문구를 바꿔주세요. */}
            비판을 사랑하는 소프트웨어 엔지니어{" "}
            <span className="text-PRIMARY font-semibold">{information.name}</span>
            입니다.
          </h2>
        </div>
      </div>
      <div className="flex gap-1">
        {information.contact.map((contact) => (
          <ContactItem
            key={contact.id}
            className="text-BLACK hover:text-PRIMARY_HEAVY dark:hover:text-PRIMARY_HEAVY"
            {...contact}
          >
            {contact.name}
          </ContactItem>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <Introduce markdown={information.markdown} />
      </div>
    </div>
  );
};

export default Information;
