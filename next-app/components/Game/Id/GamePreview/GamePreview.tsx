"use client";

import classes from "./GamePreview.module.css";
import { useState } from "react";
import { Stack, Image, Overlay, Box } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

export function GamePreview() {
  const imageList = [
    "/images/game/banner.png",
    "/images/game/christmas.png",
    "/images/game/ALPO.jpg",
    "/images/game/banner-icon.png",
    "/images/game/banner.png",
    "/images/game/christmas.png",
    "/images/game/ALPO.jpg",
    "/images/game/banner-icon.png",
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const slides = imageList.map((item, index) => {
    return (
      <Box className={classes.Slide} mx={7.5}>
        {currentIndex === index ? (
          <Box className={classes.ImageBorder}></Box>
        ) : (
          <Overlay
            className={classes.SlideOverlay}
            color="#000"
            backgroundOpacity={0.6}
          />
        )}

        <Image className={classes.SlideImage} src={item} />
      </Box>
    );
  });

  return (
    <Stack align="center" gap={20}>
      <Image className={classes.Image} src={imageList[currentIndex]} />
      <Carousel
        w={720}
        height={63}
        loop
        withIndicators
        controlSize={30}
        onSlideChange={(index) => {
          setCurrentIndex(index);
        }}
        classNames={{
          root: classes.CarouselRoot,
          viewport: classes.CarouselViewport,
          indicators: classes.CarouselIndicators,
          indicator: classes.CarouselIndicator,
          controls: classes.CarouselControls,
          control: classes.CarouselControl,
        }}
      >
        {slides}
      </Carousel>
    </Stack>
  );
}
