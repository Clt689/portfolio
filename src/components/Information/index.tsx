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
          width={150}
          height={150}
          className=" object-cover rounded-2xl"
        />

        <div className="flex flex-col gap-5">
          <h3 className="leading-[1.15]">
            안녕하세요,
            {/* 포지션에 맞게 문구를 수정해주세요. 혹은, 본인이 원하는 대로 문구를 바꿔주세요. */}
            <div className="flex flex-row mt-5 mb-2">
              <div className="text-gray-500 mr-3">비판을 사랑하는 </div>
              소프트웨어 엔지니어{" "}
            </div>
            <span className="text-indigo-600 font-semibold">{information.name}</span>
            입니다.
          </h3>
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
