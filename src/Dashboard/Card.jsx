import Icon from "@mdi/react";
import { mdiEyePlusOutline } from "@mdi/js";
import { mdiStarPlusOutline } from "@mdi/js";
import { mdiSourceFork } from "@mdi/js";

export const Card = ({ title }) => {
  return (
    <div className="bg-white px-6 pt-8 pb-4 border-l-8 border-amber-500 rounded-lg shadow-md flex flex-col gap-4">
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
          accusantium veritatis facilis rem facere voluptate quis earum placeat
          minus porro quae laboriosam, at nulla tempora dolorum corporis, magni
          voluptatum blanditiis?
        </p>
      </div>
      <div className="flex justify-end gap-4 p-4 flex-wrap">
        <a href="#">
          <Icon path={mdiEyePlusOutline} size={1} />
        </a>
        <a href="#">
          <Icon path={mdiStarPlusOutline} size={1} />
        </a>
        <a href="#">
          <Icon path={mdiSourceFork} size={1} />
        </a>
      </div>
    </div>
  );
};
