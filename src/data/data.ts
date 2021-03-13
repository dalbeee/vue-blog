interface IPost {
  title: string;
  content: string;
  id: number;
  created_at?: number;
}

export const dataSet: IPost[] = [
  { id: 1, title: "테스트1", content: "내용" },
  { id: 2, title: "테스트2", content: "내용" },
  { id: 3, title: "테스트3", content: "내용" },
  { id: 4, title: "테스트4", content: "내용" },
  { id: 5, title: "테스트5", content: "내용" },
];
