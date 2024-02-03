"use client";

import { Carousel } from "@mantine/carousel";
import classes from "./Collection.module.css";
import { Text, BackgroundImage, Box } from "@mantine/core";
import Link from "next/link";
import { GameDisplay } from "../GameDisplay/GameDisplay";
import { game_display_data } from "@/constants/game-display";

export function CollectionTitle() {
  return (
    <Link href="/">
      <BackgroundImage
        className={classes.CollectionImage}
        h={70}
        src="/images/game/cityscape.png"
      >
        <Box className={classes.BoxGradient}>
          <Text className={classes.WhiteBlack24}>AGORA 베타테스트 스페셜</Text>
        </Box>
      </BackgroundImage>
    </Link>
  );
}

export function Collection() {
  const gamelist = game_display_data.map((item) => (
    <Box mx={8.5}>
      <GameDisplay data={item} />
    </Box>
  ));

  return (
    <Carousel
      w={"100%"}
      height={245}
      align="start"
      withIndicators
      controlSize={35}
      slidesToScroll={5}
      className={classes.Carousel}
      classNames={{
        viewport: classes.CarouselViewport,
        indicators: classes.CarouselIndicators,
        indicator: classes.CarouselIndicator,
        controls: classes.CarouselControls,
        control: classes.CarouselControl,
      }}
    >
      {gamelist}
    </Carousel>
  );
}
