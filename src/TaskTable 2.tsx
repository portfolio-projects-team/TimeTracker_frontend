
import React, { useState } from 'react';
import { Input, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import './TaskTable.css'; // Import the CSS file

interface Task {
    id: number;
    name: string;
}

interface TaskTableProps {
    data: Task[];
}

const TaskTable: React.FC<TaskTableProps> = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filteredData = data.filter(task =>
        task.id.toString().includes(searchTerm)
    );

    return (
        <>
            <Input
                type="text"
                placeholder="Search Task ID"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Table className="task-table" variant="simple" mt={4}>
                <Thead>
                    <Tr>
                        <Th>Task ID</Th>
                        <Th>Task Name</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {filteredData.map((task) => (
                        <Tr key={task.id}>
                            <Td>{task.id}</Td>
                            <Td>{task.name}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </>
    );
};

export default TaskTable;