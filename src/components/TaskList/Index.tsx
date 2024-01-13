import { useEffect, useState } from "react";
import { Task, getTasks } from "../../api";
import TaskPanel from "../TaskPanel/Index";

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTasks().then((res) => {
      setTasks(res);
    });
  }, []);

  return (
    <>
      {tasks &&
        //TODO: Switch to ID
        tasks.map((task) => <TaskPanel key={task.taskName} task={task} />)}
    </>
  );
}
