
import React, { useState, useEffect, useCallback } from "react";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { Duration, intervalToDuration } from "date-fns";
import { Task } from "../../api";

const TaskPanel: React.FC<{ task: Task }> = ({ task }) => {
  const [duration, setDuration] = useState<Duration | undefined>(undefined);
  const [timerRunning, setTimerRunning] = useState(true); 
const [intervalId, setIntervalId] = useState<number| undefined>(undefined);


  const updateDuration = useCallback(() => {
    if (task.startTime) {
      const newDuration = intervalToDuration({
        start: Number(task.startTime) * 1000,
        end: new Date(),
      });
      setDuration(newDuration);
    }
  }, [task]);

  useEffect(() => {
    if (timerRunning) {
      updateDuration(); 
      const id = window.setInterval(updateDuration, 1000);
      setIntervalId(id); 
      return () => {
        clearInterval(id); 
      };
    }
    if (!timerRunning && intervalId !== undefined) {
      clearInterval(intervalId);
      setIntervalId(undefined); 
    }
    
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [timerRunning, updateDuration, intervalId]);


  const zeroPad = (num: number, places: number) =>
    String(num).padStart(places, "0");

  const displayDuration = duration
    ? {
        hours: zeroPad(duration.hours ?? 0, 2),
        minutes: zeroPad(duration.minutes ?? 0, 2),
        seconds: zeroPad(duration.seconds ?? 0, 2),
      }
    : {
        hours: "00",
        minutes: "00",
        seconds: "00",
      };

   const handleStartStopTimer = () => {
     setTimerRunning((prevState) => !prevState); 
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
              Timer: {displayDuration.hours}hr: {displayDuration.minutes}m: {displayDuration.seconds}s
            </Text>
          )}
          <Button onClick={handleStartStopTimer} w="full" colorScheme={timerRunning ? "red" : "green"}>
            {timerRunning ? 'Stop' : 'Start'}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default TaskPanel;