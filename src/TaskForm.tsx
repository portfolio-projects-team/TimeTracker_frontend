import React from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    // Stack,
    Text,
    VStack,
} from '@chakra-ui/react';

const TaskForm: React.FC = () => {
    return (
        <Box p={4}>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
                Create new task
            </Text>
            <VStack spacing={4} align="start">
                {/* Task Name */}
                <FormControl>
                    <FormLabel>Task Name</FormLabel>
                    <Input type="text" placeholder="Enter task name" />
                </FormControl>

                {/* Start Date */}
                <FormControl>
                    <FormLabel>Start Date</FormLabel>
                    <Input type="date" />
                </FormControl>

                {/* End Date */}
                <FormControl>
                    <FormLabel>End Date</FormLabel>
                    <Input type="date" />
                </FormControl>

                {/* Duration */}
                <FormControl>
                    <FormLabel>Duration</FormLabel>
                    <Input type="text" placeholder="Enter duration" />
                </FormControl>

                {/* Create Button */}
                <Button colorScheme="teal" mt={4}>
                    CREATE
                </Button>
            </VStack>
        </Box>
    );
};

export default TaskForm;