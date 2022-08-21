import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { IconButton } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Skeleton from "@mui/material/Skeleton";
import { faker } from '@faker-js/faker';

export default class GetStories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {loading: true };
  }

  componentDidMount() {
    this.setState({loading: false})
  }

  render() {
    const { loading } = this.state;
    const picUrl = faker.image.avatar();
    const userFirstName = faker.name.firstName();
    const userCity = faker.address.city();
    

    return loading ? (
      <Skeleton height={90} />
    ) : (
      <Card
        sx={{
          display: "flex",
          maxHeight: 90,
          minHeight: 90,
          backgroundColor: "rgba(255, 255, 255, .50)",
          backdropFilter: "blur(5px)",
        }}
      >
        <CardMedia
          component="img"
          maxheight="80"
          minheight="80"
          sx={{ width: 80 }}
          image={picUrl}
          alt=""
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flex: "auto",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h8" component="div">
              {userFirstName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {userCity}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
              variant="outlined"
              size="small"
              sx={{ justifyContent: "Right" }}
            >
              <MessageIcon />
            </IconButton>
          </CardActions>
        </Box>
      </Card>
    );
  }
}
