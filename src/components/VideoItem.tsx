import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({
  video,
  onVideoSelect
}: {
  video:
    | any
    | { snippet: { thumbnails: { medium: { url: string } }; title: string } };
  onVideoSelect: Function;
}) => (
  <Grid item xs={12}>
    <Paper
      style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      onClick={() => onVideoSelect(video)}
    >
      <img
        style={{ marginRight: "20px", width: "60%" }}
        alt="thumbnail"
        src={video.snippet.thumbnails.medium.url}
      />
      <Typography variant="subtitle2">
        <b>{video.snippet.title}</b>
      </Typography>
    </Paper>
  </Grid>
);

export default VideoItem;
