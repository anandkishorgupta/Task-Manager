import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
const TaskList = () => {
  const [formData, setFormData] = useState({
    name: "",
    completed: false,
  });
  const { name } = formData;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const createTask = async (e) => {
    e.preventDefault();
    // console.log(formData);
    if (name === "") {
      return toast.error("Input field cannot be empty");
    }
    try {
      await axios.post("http://localhost:5000/api/tasks", formData);
      toast.success("Task added successfully");
      setFormData({ ...formData, name: "" });
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <Box width={"500px"} m={"0 auto"} border={"solid red"} padding={"20px"}>
      <Typography variant={"h2"}>Task Manager</Typography>
      <TaskForm
        name={name}
        handleInputChange={handleInputChange}
        createTask={createTask}
      />
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
