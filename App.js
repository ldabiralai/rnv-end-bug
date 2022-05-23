import React, { useRef, useState } from "react";
import Video from "react-native-video";

export default function App() {
  const video = useRef();
  const [paused, setPaused] = useState(false);
  const onEnd = () => {
    console.log("onEnd", Date.now());
    setPaused(true);

    setTimeout(() => {
      video.current.seek(0);
      setPaused(false);
    });
  };

  return (
    <Video
      ref={video}
      source={{
        uri: "https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      }}
      style={{ flex: 1 }}
      onEnd={onEnd}
      paused={paused}
    />
  );
}
