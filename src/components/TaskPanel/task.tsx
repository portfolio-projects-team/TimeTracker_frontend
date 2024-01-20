import React, { useState, useEffect } from "react";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { Duration, intervalToDuration } from "date-fns";
import { Task } from "../../api";

const TaskPanel: React.FC<{ task: Task }> = ({ task }) => {
  const [duration, setDuration] = useState<Duration | undefined>(undefined);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;

    if (task.startTime) {
      intervalId = setInterval(() => {
        const duration = intervalToDuration({
          start: Number(task.startTime * 1000).getTime(),
          end: Date.now(),
        });

        setDuration(duration);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [task]);

  // Helper function to format the duration parts
  const formatDurationPart = (part?: number): string => {
    // Ensure that `part` is a number (defaulting to 0), and pad with leading zeros if necessary
    return String(part ?? 0).padStart(2, '0');
  };

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
              {`Timer: ${formatDurationPart(duration.hours)}hr: ${formatDurationPart(duration.minutes)}m: ${formatDurationPart(duration.seconds)}s`}
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
