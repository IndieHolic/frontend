import { TypoStyle } from "@/components/Commons/TypoStyle/TypoStyle";

export default function Home() {
  return (
    <TypoStyle>
      <div
        dangerouslySetInnerHTML={{
          __html: `《Hexile》은 매 스테이지가 확장되는 전략 게임으로, 플레이어는
              끊임없이 스폰되는 AI 적들과 맞서 싸워야 합니다. 폐허가 된
              세계에서의 생존을 위해 자원을 수집하고, 미사일을 제작하여 적들을
              물리치는 것이 궁극적인 목표입니다. 매 턴마다 자원을 확보하고,
              전략적으로 타일을 구매하며, 고도로 맞춤화된 미사일로 적의 방어를
              뚫어야 합니다. 적들의 타일을 점령하고 전쟁의 조류를 바꾸세요. 각
              선택은 승리로 가는 길을 닦거나 패배의 함정에 빠뜨릴 수 있습니다.
              전략가로서 당신의 지혜와 결정이 이 무너진 세계의 운명을
              결정짓습니다. 과연 당신은 이 치열한 전투를 헤쳐나가 폐허 속에서
              희망의 빛을 발견할 수 있을까요?</br></br><strong>게임 룰</strong></br>
필드에는 플레이어와 AI가 스폰됩니다. 이 AI들은 전부 플레이어를 공격하려 합니다. 
미사일을 통해, 이 AI들을 전부 물리치는 것이 한 스테이지의 승리 조건입니다.
스테이지를 진행할 때마다 맵이 넓어집니다.</br></br>
각 타일에서는 매턴마다 일정량의 자원이 주어집니다.
이 자원을 통해서 새로운 타일을 구매하거나, 미사일을 생산할 수 있습니다.
적 소유의 타일은 구매할 수 없으며, 각 타일의 가격이나 방어력 등의 정보는 타일을 클릭하여 확인할 수 있습니다.</br></br>
미사일을 생산할 때 들어가는 부품을 선택할 수 있습니다. 이러한 부품은 미사일에 대한 연구를 진행하며 점점 해금해 나갈 수 있습니다.
이렇게 제작한 미사일은 발사 위치와 타격 위치를 지정하여 발사합니다.
미사일로 적 타일을 공격하여 적을 전부 물리치세요!</br></br>
<strong>조작방식</strong></br>
우측 하단의 시계를 클릭하여 턴을 넘길 수 있습니다.
미사일 발사 시, 내 소유의 타일을 클릭하여 발사 타일을 선택하고, 적 소유의 타일을 클릭하여 타격 지점을 지정할 수 있습니다.`,
        }}
      />
    </TypoStyle>
  );
}
