import { mdiBellRingOutline, mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import User from "../assets/User.jpg";
import { HeaderButton } from "./HeaderButton";

export const DashHeader = () => {
  return (
    <header className="col-start-2 col-end-3 grid grid-cols-[3fr_2fr] bg-white px-14 py-4 gap-4 shadow-md">
      <div className="flex gap-4 items-center">
        <Icon className="cursor-pointer" path={mdiMagnify} size={"1.5rem"} />
        <input className="bg-gray-200 h-8 rounded-3xl w-full" type="text" />
      </div>
      <div className="flex gap-8 items-center justify-end">
        <Icon
          className="cursor-pointer"
          path={mdiBellRingOutline}
          size={"1.5rem"}
        />
        <img className="h-12 w-12 rounded-full" src={User} alt="#" />
        <span className="font-bold text-lg">Morgan Oakley</span>
      </div>

      <div className="flex gap-8 items-center">
        <img className="h-18 w-18 rounded-full" src={User} alt="#" />
        <div>
          <div className="font-bold">Hi there,</div>
          <div className="text-2xl font-bold">Morgan Oakley (@morgan)</div>
        </div>
      </div>
      <div className="flex gap-8 items-center justify-end flex-wrap">
        <HeaderButton title={"New"} />
        <HeaderButton title={"Upload"} />
        <HeaderButton title={"Share"} />
      </div>
    </header>
  );
};
