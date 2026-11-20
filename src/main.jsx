import React from "react";
import { createRoot } from "react-dom/client";
import { DepthField } from "@/components/depth-field";
import "./index.css";
import "./site-react.css";

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;
const images = [
  asset("magen-mark.jpg"),
  asset("alisha-guide.png"),
  asset("magen-audio.jpg"),
  asset("magen-download.jpg"),
  asset("magen-player.jpg"),
  asset("magen-wallpaper.jpg")
];

function MagenDepthField() {
  return (
    <DepthField
      images={images}
      textAlign="center"
      title="Magen Gillan"
      subtitle=""
      buttonText="Explore components"
      buttonHref="#apps"
      secondaryButtonText="Learn more"
      secondaryButtonHref="#controls"
      fontFamily="'Plus Jakarta Sans', 'Inter Variable', sans-serif"
      background="#cabebe"
      color="#262f09"
      fontSize="clamp(2rem, 5.5cqw, 5rem)"
      speed={5}
      entryBurst={70}
      entryDuration={2.8}
      entryDelay={0}
      scrollBoost={50}
      rotationSpeed={11}
      rotationDirection="counterclockwise"
      spread={13}
      depth={96}
      count={36}
      imageSize={3.8}
      imageRadius={0}
      paused={false}
      showText={true}
      imageOrigin="center"
      height="100svh"
    />
  );
}

const mount = document.getElementById("depthFieldReact");
if (mount) createRoot(mount).render(<MagenDepthField />);
