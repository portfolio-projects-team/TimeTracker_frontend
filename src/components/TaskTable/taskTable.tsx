import React, { useState, useEffect } from "react";
import { getTasks } from "../../../cognitoAuth";

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
  Center,
} from "@chakra-ui/react";

interface Task {
  id: number;
  name: string;
}

interface TaskTableProps {
  // data: Task[];
}

const TaskTable: React.FC<TaskTableProps> = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [data, setData] = useState<Task[]>([]);

 useEffect(() => {
  const tasks = getTasks().then(res => res.tasks);
});

  const filteredData =data.filter((task) =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const bgHeader = "blue.100";

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      p={2}
      mt={130}
    >
      <Input
        type="text"
        placeholder="Search by Task Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        mb={4}
        w="full"
        ml={50}
        mr={50}
      />

      <Box w="full" overflowX="auto" mt={30}>
        <Table variant="simple" size="md" borderWidth="1px" borderRadius="lg">
          <Thead bg={bgHeader} borderTopWidth="2px">
            <Tr>
              <Th borderWidth="1px" borderColor="gray" p={2} textAlign="center">
                Task ID
              </Th>
              <Th
                borderWidth="1px"
                borderColor="gray.200"
                p={2}
                textAlign="center"
              >
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
