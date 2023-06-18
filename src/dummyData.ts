// MongoDB用ダミーデータ
export const Users = [
  {
    id: 1,
    profilePicture: "/person/1.jpeg",
    username: "massu",
  },
  {
    id: 2,
    profilePicture: "/person/2.jpeg",
    username: "ishikawa",
  },
  {
    id: 3,
    profilePicture: "/person/3.jpeg",
    username: "horikawa",
  },
  {
    id: 4,
    profilePicture: "/person/4.jpeg",
    username: "Matuyama",
  },
  {
    id: 5,
    profilePicture: "/person/5.jpeg",
    username: "akutsu",
  },
];

export const Posts = [
  {
    id: 1,
    desc: "コツコツの積み重ねが大事。",
    photo: "/post/1.jpeg",
    date: "5分前",
    userId: 1,
    like: 20,
    comment: 4,
  },
  {
    id: 2,
    desc: "新しい技術スタックが楽しい",
    photo: "/post/2.jpeg",
    date: "2分前",
    userId: 2,
    like: 140,
    comment: 13,
  },
  {
    id: 3,
    desc: "massuかっこいい",
    photo: "/post/3.jpeg",
    date: "10分前",
    userId: 3,
    like: 230,
    comment: 29,
  },
  {
    id: 4,
    photo: "/post/4.jpeg",
    date: "1分前",
    userId: 4,
    like: 10,
    comment: 1,
  },
  {
    id: 5,
    desc: "定期的に散歩した方が生産性が上がる。",
    photo: "/post/5.jpeg",
    date: "1分前",
    userId: 5,
    like: 100,
    comment: 3,
  },
];