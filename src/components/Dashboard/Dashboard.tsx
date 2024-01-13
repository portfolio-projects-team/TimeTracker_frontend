import { Box } from "@chakra-ui/react";
import Sidebar from "../Sidebar/sidebar";
import TaskForm from "../TaskForm/TaskForm";

const Dashboard = () => {
  return (
    <Box my={12}>
      <TaskForm />
      <Sidebar />
    </Box>
  );
};

export default Dashboard;
