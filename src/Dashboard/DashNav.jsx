import {
  mdiAccountGroup,
  mdiClockTimeThree,
  mdiCog,
  mdiFileMultiple,
  mdiHelpBox,
  mdiHome,
  mdiShieldCheck,
  mdiCardAccountDetailsOutline,
  mdiMessageReply,
  mdiViewDashboard,
} from "@mdi/js";
import Icon from "@mdi/react";

export const DashNav = () => {
  return (
    <nav className="row-span-2 bg-blue-400 text-white font-bold text-xl p-4 grid grid-cols-1 grid-rows-[auto_auto_1fr] gap-10">
      <div>
        <a href="#" className="flex gap-4 items-center text-3xl">
          <Icon path={mdiViewDashboard} size={"3.5rem"} />
          Dashboard
        </a>
      </div>
      <ul className="flex flex-col gap-4">
        <li>
          <a href="#" className="flex gap-4 items-center hover:underline">
            <Icon path={mdiHome} size={"1.5rem"} />
            Home
          </a>
        </li>
        <li>
          <a href="#" className="flex gap-4 items-center hover:underline">
            <Icon path={mdiCardAccountDetailsOutline} size={"1.5rem"} />
            Profile
          </a>
        </li>
        <li>
          <a href="#" className="flex gap-4 items-center hover:underline">
            <Icon path={mdiMessageReply} size={"1.5rem"} />
            Messages
          </a>
        </li>
        <li>
          <a href="#" className="flex gap-4 items-center hover:underline">
            <Icon path={mdiClockTimeThree} size={"1.5rem"} />
            History
          </a>
        </li>
        <li>
          <a href="#" className="flex gap-4 items-center hover:underline">
            <Icon path={mdiFileMultiple} size={"1.5rem"} />
            Tasks
          </a>
        </li>
        <li>
          <a href="#" className="flex gap-4 items-center hover:underline">
            <Icon path={mdiAccountGroup} size={"1.5rem"} />
            Communities
          </a>
        </li>
      </ul>
      <ul className="flex flex-col gap-4">
        <li>
          <a href="#" className="flex gap-4 items-center hover:underline">
            <Icon path={mdiCog} size={"1.5rem"} />
            Settings
          </a>
        </li>
        <li>
          <a href="#" className="flex gap-4 items-center hover:underline">
            <Icon path={mdiHelpBox} size={"1.5rem"} />
            Support
          </a>
        </li>
        <li>
          <a href="#" className="flex gap-4 items-center hover:underline">
            <Icon path={mdiShieldCheck} size={"1.5rem"} />
            Privacy
          </a>
        </li>
      </ul>
    </nav>
  );
};
