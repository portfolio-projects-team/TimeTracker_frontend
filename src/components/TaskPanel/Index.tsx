/* eslint-disable prefer-const */
import React, { useState, useEffect } from "react";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { Duration, intervalToDuration } from "date-fns";

import { Task } from "../../api";

const TaskPanel: React.FC<{ task: Task }> = ({ task }) => {
  const [duration, setDuration] = useState<Duration | undefined>(undefined);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;

    intervalId = setInterval(() => {
      const duration = intervalToDuration({
        start: Number(task.startTime) * 1000,
        end: Date.now(),
      });

      setDuration(duration);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [task]);

  const handleStartStopTimer = () => {
    // setIsTimerRunning(!isTimerRunning);
  };

  return (
    <Box p={4} maxWidth="400px" mx="auto">
      <Stack spacing={4}>
        <Text fontSize="lg" fontWeight="bold" mb={2}>
          {task.taskName}
        </Text>

        <Box>
          {duration && (
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              {`Timer: ${duration?.hours}hr: ${duration?.minutes}m: ${duration?.seconds}s`}
            </Text>
          )}
          <Button onClick={handleStartStopTimer} w="full" colorScheme="red">
            Stop
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default TaskPanel;
