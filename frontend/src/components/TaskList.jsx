import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
import LoadImg from "../assets/loading.gif";
const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    Taskname: "",
    completed: false,
  });
  const { Taskname } = formData;
  const handleInputChange = (e) => {
    console.log(e);
    const { name, value } = e.target; //as name=Taskname  **
    setFormData({ ...formData, [name]: value });
  };

  const getTasks = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("http://localhost:5000/api/tasks");
      setTasks(data);
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getTasks();
  }, []);
  const createTask = async (e) => {
    e.preventDefault();
    // console.log(formData);
    if (Taskname === "") {
      return toast.error("Input field cannot be empty");
    }
    try {
      await axios.post("http://localhost:5000/api/tasks", formData);
      toast.success("Task added successfully");
      setFormData({ ...formData, Taskname: "" });
      getTasks();
    } catch (error) {
      toast.error(error.message);
    }
  };
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      getTasks();
    } catch (error) {
      toast.error("error.messages");
    }
  };
  return (
    <Box width={"500px"} m={"0 auto"} padding={"20px"}>
      <Typography variant={"h2"}>Task Manager</Typography>
      <TaskForm
        value={Taskname}
        handleInputChange={handleInputChange}
        createTask={createTask}
      />
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography>
          <b> Total Task:</b>
          {tasks.length}
        </Typography>
        <Typography>
          <b> Completed Task:</b>0
        </Typography>
      </Stack>
      <hr />
      {isLoading && (
        <Box>
          {/* <img src={LoadImg} alt="Loading....." width={"50px"} /> */}
        </Box>
      )}
      {!isLoading && tasks.length === 0 ? (
        <Typography>No Task added . Please add atask</Typography>
      ) : (
        <>
          {tasks.map((task, index) => {
            return (
              <Task
                key={task._id}
                task={task}
                index={index}
                deleteTask={deleteTask}
              />
            );
          })}
        </>
      )}
    </Box>
  );
};

export default TaskList;
