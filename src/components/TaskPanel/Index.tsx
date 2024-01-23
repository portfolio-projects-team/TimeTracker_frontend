
import React, { useState, useEffect } from "react";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { Duration, intervalToDuration } from "date-fns";
import { Task } from "../../api";

const TaskPanel: React.FC<{ task: Task }> = ({ task }) => {
  const [duration, setDuration] = useState<Duration | undefined>(undefined);
  const [timerRunning, setTimerRunning] = useState(true); 
const [intervalId, setIntervalId] = useState<number| undefined>(undefined);

  useEffect(() => {
    if (!timerRunning) {
      return;
    }

    const updateDuration = () => {
      if (task.startTime) {
        setDuration(intervalToDuration({
          start: Number(task.startTime) * 1000, 
          end: new Date(), 
        }));
      }
    };

    updateDuration(); 
    const id = setInterval(updateDuration, 1000);
    setIntervalId(id); 

    return () => clearInterval(id);
  }, [task, timerRunning]);

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
    if ( timerRunning) {
      clearInterval(intervalId);
      setIntervalId(undefined);
    } else if (!timerRunning) {
      const id = setInterval(() => {
        if (task.startTime) {
          setDuration(intervalToDuration({
            start: Number(task.startTime) * 1000, 
            end: new Date(), 
          }));
        }
      }, 1000);
      setIntervalId(id);
    }
    
    setTimerRunning(!timerRunning);
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