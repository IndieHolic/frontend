"use client";

import {
  game_display_data,
  game_display_data_type,
} from "@/constants/game-display";
import classes from "./Banner.module.css";
import { Carousel } from "@mantine/carousel";
import { Box, Image, Text, Stack, BackgroundImage } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export function Banner() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  const slideList = game_display_data.map((item) => (
    <BannerSlide data={item} />
  ));

  return (
    <Carousel
      w={"100%"}
      height={450}
      loop
      withIndicators
      controlSize={35}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      className={classes.Carousel}
      classNames={{
        viewport: classes.CarouselViewport,
        indicators: classes.CarouselIndicators,
        indicator: classes.CarouselIndicator,
        controls: classes.CarouselControls,
        control: classes.CarouselControl,
      }}
    >
      {slideList}
    </Carousel>
  );
}

interface BannerSlideProps {
  data: game_display_data_type;
}
export function BannerSlide({ data }: BannerSlideProps) {
  return (
    <BackgroundImage
      className={classes.BannerSlide}
      src={data.thumbnail}
      mx={10}
    >
      <Box className={classes.BannerGradient}>
        <Stack gap={10} ml={75}>
          <Box className={classes.BoxGradient}>
            <Image w={60} radius={8} src="/images/temp/gray.svg" />
            <Text className={classes.WhiteBold32}>{data.title}</Text>
          </Box>
          <Text className={classes.WhiteLight20} lineClamp={2} w={800}>
            {data.description}
          </Text>
        </Stack>
      </Box>
    </BackgroundImage>
  );
}
