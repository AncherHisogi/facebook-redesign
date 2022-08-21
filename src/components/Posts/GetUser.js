import React from "react";
import Avatar from "@mui/material/Avatar";
import { faker } from '@faker-js/faker';

export default function GetUser(){
  const picUrl = faker.image.avatar()
  return (
    <Avatar src={picUrl} />
  )
}