import { DashMain } from "./DashMain";
import { DashNav } from "./DashNav";
import { DashHeader } from "./DashHeader";

export const Dashboard = () => {
  return (
    <div className="grid min-h-dvh grid-cols-[minmax(200px,1fr)_5fr] grid-rows-[min(200px,1fr)_4fr] bg-gray-100">
      <DashNav />
      <DashHeader />
      <DashMain />
    </div>
  );
};
