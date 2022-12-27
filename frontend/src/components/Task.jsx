import { Stack, Typography } from "@mui/material";
import React from "react";

import { FaEdit, FaCheckDouble, FaTrashAlt } from "react-icons/fa";
const Task = ({
  task,
  index,
  deleteTask,
  editMode,
  setToComplete,
  taskCompleted,
}) => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      bgcolor={"#f8f9fa"}
      padding={"8px 10px"}
      marginTop={"7px"}
    >
      <Typography>
        <b>{index + 1 + ". "}</b>
        {task.Taskname}
      </Typography>

      <Stack direction={"row"} gap={"10px"}>
        <FaCheckDouble
          color="green"
          cursor={"pointer"}
          onClick={() => {
            setToComplete(task);
          }}
        />
        <FaEdit
          color="blue"
          cursor={"pointer"}
          onClick={() => {
            editMode(task);
          }}
        />
        <FaTrashAlt
          color="red"
          cursor={"pointer"}
          onClick={() => {
            deleteTask(task._id);
          }}
        />
      </Stack>
    </Stack>
  );
};

export default Task;
