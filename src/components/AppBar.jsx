import { StatusFilter } from "./StatusFilter";
import { TaskCounter } from "./TaskCounter";

export const AppBar = () => {
  return (
    <header className="flex justify-between">
      <section className="grid gap-1">
        <h2 className="m-0 text-[16px]!">Tasks</h2>
        <TaskCounter />
      </section>
      <section className="grid gap-1">
        <h2 className="m-0 text-[16px]!">Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
};
