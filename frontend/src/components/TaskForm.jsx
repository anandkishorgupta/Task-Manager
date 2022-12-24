import { Box, Button, Input } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const TaskForm = ({ createTask, value, handleInputChange }) => {
  return (
    <Box margin={"30px 0"}>
      <form onSubmit={createTask}>
        <Stack direction={"row"} gap={"10px"}>
          <Input
            type="text"
            placeholder="Add a Task"
            name="Taskname"
            value={value}
            onChange={handleInputChange}
            fullWidth
          />
          <Button variant="contained" disableElevation type="submit">
            Add
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default TaskForm;
