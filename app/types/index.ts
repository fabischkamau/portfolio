interface Blog {
  id: string;
  title: string;
  description: string;
  content: string;
  createdAt: string;
  author: {
    fullName: string;
    avatarUrl: string;
  };
  categories: {
    id: string;
    name: string;
  }[];
}

export type { Blog };
