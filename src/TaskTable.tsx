import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Box,
} from "@chakra-ui/react";

interface Task {
  id: number;
  name: string;
}

interface TaskTableProps {
  data: Task[];
}

const TaskTable: React.FC<TaskTableProps> = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [data, setData] = useState<Task[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://9mdink4tu2.execute-api.eu-west-2.amazonaws.com/Prod/task"
        ); 
        setData(response.data.tasks);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 

  const filteredData = data.filter((task) =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const bgHeader = "blue.100";

  return (
    <Flex direction="column" alignItems="center" justifyContent="center" p={10}>
      <Input
        type="text"
        placeholder="Search by Task Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        mb={4}
        w="full"
      />

      <Box w="full" overflowX="auto">
        <Table variant="simple" size="md" borderWidth="1px" borderRadius="lg">
          <Thead bg={bgHeader} borderTopWidth="2px">
            <Tr>
              <Th borderWidth="1px" borderColor="gray" p={10}>
                Task ID
              </Th>
              <Th borderWidth="1px" borderColor="gray.200" p={10}>
                Task Name
              </Th>
            </Tr>
          </Thead>
          <Tbody p={10} m={10}>
            {filteredData.length > 0 ? (
              filteredData.map((task) => (
                <Tr key={task.id}>
                  <Td borderWidth="1px" borderColor="gray" p={2}>
                    {task.id}
                  </Td>
                  <Td borderWidth="1px" borderColor="gray" p={2}>
                    {task.name}
                  </Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td
                  colSpan={2}
                  textAlign="center"
                  borderWidth="1px"
                  borderColor="gray.200"
                  p={2}
                >
                  No tasks found.
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
};

export default TaskTable;
