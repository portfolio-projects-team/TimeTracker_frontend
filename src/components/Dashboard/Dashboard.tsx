import { Box } from "@chakra-ui/react";
import Sidebar from "../Sidebar/sidebar";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/Index";

const Dashboard = () => {
  return (
    <Box my={12}>
      <TaskForm />
      <Sidebar />
      <TaskList />
    </Box>
  );
};

export default Dashboard;
