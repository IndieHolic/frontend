import { Carousel } from "@mantine/carousel";
import classes from "./Collection.module.css";
import { Text, BackgroundImage, Box } from "@mantine/core";
import Link from "next/link";
import { GameDisplay } from "../GameDisplay/GameDisplay";

export function CollectionTitle() {
  return (
    <Link href="/">
      <BackgroundImage
        className={classes.CollectionImage}
        h={70}
        src="/images/game/christmas.png"
      >
        <Box className={classes.BoxGradient}>
          <Text className={classes.WhiteBlack24}>크리스마스 특집</Text>
        </Box>
      </BackgroundImage>
    </Link>
  );
}

export function Collection() {
  return (
    <Carousel
      w={"100%"}
      height={245}
      align="start"
      loop
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
      <Box mx={8.5}>
        <GameDisplay />
      </Box>
      <Box mx={8.5}>
        <GameDisplay />
      </Box>
      <Box mx={8.5}>
        <GameDisplay />
      </Box>
      <Box mx={8.5}>
        <GameDisplay />
      </Box>
      <Box mx={8.5}>
        <GameDisplay />
      </Box>
      <Box mx={8.5}>
        <GameDisplay />
      </Box>
      <Box mx={8.5}>
        <GameDisplay />
      </Box>
      <Box mx={8.5}>
        <GameDisplay />
      </Box>
      <Box mx={8.5}>
        <GameDisplay />
      </Box>
      <Box mx={8.5}>
        <GameDisplay />
      </Box>
      <Box mx={8.5}>
        <GameDisplay />
      </Box>
      <Box mx={8.5}>
        <GameDisplay />
      </Box>
      <Box mx={8.5}>
        <GameDisplay />
      </Box>
    </Carousel>
  );
}
