import { TypoStyle } from "@/components/Commons/TypoStyle/TypoStyle";

export default function Home() {
  return (
    <TypoStyle>
      <div dangerouslySetInnerHTML={{ __html: "<p>Your html here</p>" }} />
    </TypoStyle>
  );
}
