import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const [formData, setFormData] = useState({
    name: "",
    completed: false,
  });
  const { name } = formData;
  return (
    <Box width={"500px"} m={"0 auto"} border={"solid red"} padding={"20px"}>
      <Typography variant={"h2"}>Task Manager</Typography>
      <TaskForm />
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography>
          <b> Total Task:</b>0
        </Typography>
        <Typography>
          <b> Completed Task:</b>0
        </Typography>
      </Stack>
      <hr />
      <Task />
    </Box>
  );
};

export default TaskList;
