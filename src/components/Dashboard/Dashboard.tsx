import Sidebar from "../Sidebar/sidebar";
import TaskForm from "../TaskForm/TaskForm";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <TaskForm />
    </div>
  );
};

export default Dashboard;
