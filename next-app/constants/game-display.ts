export interface game_display_data_type {
  thumbnail: string;
  genre: string[];
  title: string;
  developer: string;
  description: string;
}

export const game_display_data: game_display_data_type[] = [
  {
    thumbnail: "/images/temp/hexsile_thumbnail.png",
    genre: ["시뮬레이션", "전략"],
    title: "Hexsile",
    developer: "-",
    description: "타일에서 자원을 얻어, 미사일을 강화하고 적들을 패퇴시키세요",
  },
  {
    thumbnail: "/images/temp/revolve_defense_thumbnail.png",
    genre: ["디펜스", "전략"],
    title: "Revolve Defense",
    developer: "코코넛",
    description: "여러 가지 종류의 총알을 통해 몰려드는 좀비를 막는 게임",
  },
  {
    thumbnail: "/images/temp/time_out_thumbnail.png",
    genre: ["퍼즐"],
    title: "Time Out",
    developer: "김성훈",
    description: "시간의 흐름을 조절하여 쪼꼬미들을 구하세요!",
  },
  {
    thumbnail: "/images/temp/william_shakespeare_thumbnail.png",
    genre: ["비주얼 노벨"],
    title: "William Shakespeare",
    developer: "Team Linear",
    description:
      "세계적인 대문호 윌리엄 셰익스피어, 아직 성공하지 않은 시절의 그에게 작가의 요정이 찾아왔습니다. 당신의 선택에 따라 소설을 쓰거나 서점에 들리기도 하며, 그는 여러가지 엔딩에 가까워집니다.",
  },
  {
    thumbnail: "/images/temp/atom_dodge_thumbnail.png",
    genre: ["액션"],
    title: "Atom Dodge",
    developer: "-",
    description: `전자를 회피하고 흡수하여 적 분자들을 물리칩시다.\n
원자, 그리고 원자들이 모여 만들어진 분자들은 전자로 이루어져 있습니다.
당신 앞에 나타난 분자들은 이런 전자를 쏘아 당신을 공격하기 시작합니다.
이에 맞서, 당신은 전자를 피하고, 흡수하여 분자들을 물리치고자 합니다.`,
  },
  {
    thumbnail: "/images/temp/I_hate_paper_straws_thumbnail.png",
    genre: ["액션", "캐주얼"],
    title: "종이 빨대가 싫어요",
    developer: "지원님",
    description:
      "오늘도 어김없이 커피를 마시고 있는 주인공, 하지만 카페에서는 플라스틱 빨대를 더 이상 사용하지 않고 마는데... 결국 축 늘어져버린 종이 빨대를 발견한 주인공은 복수를 다짐합니다.",
  },
  {
    thumbnail: "/images/temp/wa_sim_thumbnail.png",
    genre: ["캐주얼"],
    title: "와 심봤다!",
    developer: "지원님",
    description: "약초를 마름에게 최대한 많이 판매해 점수를 올리세요!",
  },
];
