import { Box, Button, Group, Stack, Text } from "@mantine/core";
import classes from "./MainInfo.module.css";
import { IconArrowRight, IconBulb } from "@tabler/icons-react";

export function MainInfo() {
  return (
    <Box className={classes.Wrapper}>
      <Stack align="flex-start" gap={60}>
        <Stack align="flex-start" gap={0}>
          <Group gap={8}>
            <IconBulb size={20} color="#138BCF" stroke={2.5} />
            <Text className={classes.BlackSemiBold20}>
              인디게임을 즐기러 왔어요!
            </Text>
          </Group>
          <Text className={classes.BlackRegular14} mt={15}>
            여러 게임을 찍먹해보고 싶은 라이트 게이머부터 게임을 진득하게 즐기는
            헤비 게이머까지, 본인의 입맛에 맞는 플랜으로 인디게임을 즐겨보세요!
          </Text>
          <Group gap={25} mt={20}>
            <Button
              className={classes.Button}
              classNames={{ inner: classes.ButtonInner }}
              variant="outline"
              component="a"
              href="/game/agora-premium"
              rightSection={
                <IconArrowRight size={14} color="#138BCF" stroke={2.5} />
              }
            >
              AGORA Premium
            </Button>
            <Button
              className={classes.Button}
              classNames={{ inner: classes.ButtonInner }}
              variant="outline"
              component="a"
              href="/game/all-game"
              rightSection={
                <IconArrowRight size={14} color="#138BCF" stroke={2.5} />
              }
            >
              전체 게임
            </Button>
          </Group>
        </Stack>
        <Stack align="flex-start" gap={0}>
          <Group gap={8}>
            <IconBulb size={20} color="#138BCF" stroke={2.5} />
            <Text className={classes.BlackSemiBold20}>
              아, 이 게임 아시는구나!
            </Text>
          </Group>
          <Text className={classes.BlackRegular14} mt={15}>
            나만의 작고 소중한 게임을 모두와 얘기할 수 있는 공간이 있다면
            어떨까요. 커뮤니티에 가서 코드가 맞는 사람들과 얘기해보자구요!
          </Text>
          <Group gap={25} mt={20}>
            <Button
              className={classes.Button}
              classNames={{ inner: classes.ButtonInner }}
              variant="outline"
              component="a"
              href="/"
              rightSection={
                <IconArrowRight size={14} color="#138BCF" stroke={2.5} />
              }
            >
              개발 공간
            </Button>
          </Group>
        </Stack>
        <Stack align="flex-start" gap={0}>
          <Group gap={8}>
            <IconBulb size={20} color="#138BCF" stroke={2.5} />
            <Text className={classes.BlackSemiBold20}>
              즐기는 걸 넘어, 인디게임을 만들고 싶어요!
            </Text>
          </Group>
          <Text className={classes.BlackRegular14} mt={15}>
            아고라의 창작자와 개발자가 준비한 에셋으로 제작에 직접 활용하거나
            모두를 위해 에셋을 업로드 할 수도 있어요!
          </Text>
          <Group gap={25} mt={20}>
            <Button
              className={classes.Button}
              classNames={{ inner: classes.ButtonInner }}
              variant="outline"
              component="a"
              href="/"
              rightSection={
                <IconArrowRight size={14} color="#138BCF" stroke={2.5} />
              }
            >
              에셋
            </Button>
            <Button
              className={classes.Button}
              classNames={{ inner: classes.ButtonInner }}
              variant="outline"
              component="a"
              href="/"
              rightSection={
                <IconArrowRight size={14} color="#138BCF" stroke={2.5} />
              }
            >
              업로드
            </Button>
          </Group>
        </Stack>
      </Stack>
    </Box>
  );
}
