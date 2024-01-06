"use client";

import classes from "./Banner.module.css";
import { Carousel } from "@mantine/carousel";
import { Box, Image, Text, Stack, BackgroundImage } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export function Banner() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <Carousel
      w={"100%"}
      height={"450px"}
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
      <BannerSlide />
      <BannerSlide />
      <BannerSlide />
      <BannerSlide />
    </Carousel>
  );
}

export function BannerSlide() {
  return (
    <BackgroundImage
      className={classes.BannerSlide}
      src="/images/game/banner.png"
      mx={"10px"}
    >
      <Box className={classes.BannerGradient}>
        <Stack gap={"10px"} ml={"75px"}>
          <Box className={classes.BoxGradient}>
            <Image
              w={"60px"}
              radius={"8px"}
              src="/images/game/banner-icon.png"
            />
            <Text className={classes.WhiteBold32}>승리의 여신: NIKKE</Text>
          </Box>
          <Text className={classes.WhiteLight20}>
            니케 : 지상을 빼앗긴 인류에게 승리를 가져오는 희망의 별빛.
          </Text>
        </Stack>
      </Box>
    </BackgroundImage>
  );
}
