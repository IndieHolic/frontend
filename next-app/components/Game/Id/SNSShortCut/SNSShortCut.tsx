import Link from "next/link";
import classes from "./SNSShortCut.module.css";
import { Box, Stack, Text } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";

export function SNSShortCut() {
  return (
    <Box className={classes.Container}>
      <Stack gap={24}>
        <Text className={classes.BlackExtraLight20}>개발사 SNS 바로가기</Text>
        <Box className={classes.FlexBox}>
          <Link className={classes.LinkBox} href="/">
            <IconBrandYoutube size={35} color="#DC3323" stroke={1.5} />
          </Link>
          <Link className={classes.LinkBox} href="/">
            <IconBrandX size={35} stroke={1.5} />
          </Link>
          <Link className={classes.LinkBox} href="/">
            <IconBrandFacebook size={35} color="#4D65F5" stroke={1.5} />
          </Link>
          <Link className={classes.LinkBox} href="/">
            <IconBrandInstagram size={35} color="#DC346A" stroke={1.5} />
          </Link>
        </Box>
      </Stack>
    </Box>
  );
}
