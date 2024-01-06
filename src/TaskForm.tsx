import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Text,
} from '@chakra-ui/react';

const TaskForm: React.FC = () => {
    const [taskName, setTaskName] = useState('');
    const [timer, setTimer] = useState<number>(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (isTimerRunning) {
            intervalId = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isTimerRunning]);

    const handleStartStopTimer = () => {
        setIsTimerRunning(!isTimerRunning);
    };

    return (
        <Box p={4} maxWidth="400px" mx="auto">
            <Stack spacing={4}>
                <FormControl>
                    <FormLabel>Task Name</FormLabel>
                    <Input
                        type="text"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                    />
                </FormControl>

                <Box>
                    <Text fontSize="lg" fontWeight="bold" mb={2}>
                        Timer: {formatTime(timer)}
                    </Text>
                    <Button onClick={handleStartStopTimer}>
                        {isTimerRunning ? 'Stop' : 'Start'}
                    </Button>
                </Box>
            </Stack>
        </Box>
    );
};

const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return ${ formattedMinutes }:${ formattedSeconds };
};

export default TaskForm;