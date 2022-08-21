import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import {faker} from '@faker-js/faker';
const imageUrl = faker.image.animals()
export default function GetPosts(){
    

 return (  
    <CardMedia
    component="img"
    height="140"
    image={imageUrl}
    alt="green iguana"
  />)
}