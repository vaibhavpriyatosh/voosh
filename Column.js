import { useDroppable } from "@dnd-kit/core";
import { TaskCard } from "./TaskCard";

export function Column({ column, tasks }) {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    // <div className="flex w-80 flex-col rounded-lg bg-neutral-800 p-4"></div>
    <div className="column-outer-list">
      <h2 className="column-inner-list">{column.title}</h2>
      <div ref={setNodeRef} className="column-task-list">
        {tasks.map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
}
