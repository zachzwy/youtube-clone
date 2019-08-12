import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";

import youtube from "./api/youtube";
import { SearchBar, VideoDetail, VideoList } from "./components";
import "./App.scss";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();

  const handleSubmit = async (searchTerm: string) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyCneTCHQQi2IBxFlIzNeCy3WesdEZWsLEQ",
        q: searchTerm
      }
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const onVideoSelect = (
    video:
      | any
      | { snippet: { thumbnails: { medium: { url: string } }; title: string } }
  ) => setSelectedVideo(video);

  useEffect(() => {
    handleSubmit("javascript");
  }, []);

  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
