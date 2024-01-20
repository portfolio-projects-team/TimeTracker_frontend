/* eslint-disable prefer-const */
import React, { useState, useEffect } from "react";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { Duration, intervalToDuration } from "date-fns";

import { Task } from "../../api";

const TaskPanel: React.FC<{ task: Task }> = ({ task }) => {
  const [duration, setDuration] = useState<Duration | undefined>(undefined);

 useEffect(() => {
    const updateDuration = () => {
      if (task.startTime) {
        setDuration(intervalToDuration({
          start: Number(task.startTime) * 1000, 
          end: new Date(), 
        }));
      }
    };

    updateDuration();
    let intervalId = setInterval(updateDuration, 1000);

    return () => clearInterval(intervalId);
  }, [task]);

  

  const zeroPad = (num: number, places: number) =>
    String(num).padStart(places, "0");

    const displayDuration = duration
      ? {
          hours: zeroPad(duration.hours?? 2,0),
          minutes: zeroPad(duration.minutes?? 2,0),
          seconds: zeroPad(duration.seconds?? 2,0),
        }
      : {
          hours: "00",
          minutes: "00",
          seconds: "00",
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
              Timer: {displayDuration.hours}hr: {displayDuration.minutes}m:{" "}
              {displayDuration.seconds}s
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


