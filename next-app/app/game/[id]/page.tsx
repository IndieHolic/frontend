import { TypographyStylesProvider } from "@mantine/core";

export default function Home() {
  return (
    <TypographyStylesProvider>
      <div dangerouslySetInnerHTML={{ __html: "<p>Your html here</p>" }} />
    </TypographyStylesProvider>
  );
}
