import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import { FaEdit, FaCheckDouble, FaTrashAlt } from "react-icons/fa";
const Task = () => {
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
        <b>1.</b>
        Task 1
      </Typography>
      <Stack direction={"row"} gap={"10px"}>
        <FaCheckDouble color="green" cursor={"pointer"} />
        <FaEdit color="blue" cursor={"pointer"} />
        <FaTrashAlt color="red" cursor={"pointer"} />
      </Stack>
    </Stack>
  );
};

export default Task;
