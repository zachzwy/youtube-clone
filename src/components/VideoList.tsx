import React from "react";
import { Grid } from "@material-ui/core";

import VideoItem from "./VideoItem";

const VideoList = ({
  videos,
  onVideoSelect
}: {
  videos: Object[];
  onVideoSelect: Function;
}) => (
  <Grid container spacing={10}>
    {videos.map((video, i) => (
      <VideoItem key={i} video={video} onVideoSelect={onVideoSelect} />
    ))}
  </Grid>
);

export default VideoList;
