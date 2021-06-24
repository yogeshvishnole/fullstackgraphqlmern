const posts = [
  {
    id: '1',
    title: 'REact fundamentals',
    description: 'Hello very good post',
  },
  {
    id: '2',
    title: 'REact fundamentals',
    description: 'Hello very good post',
  },
];

const resolvers = {
  Query: {
    posts: () => {
      return posts;
    },
  },
};

export { resolvers as default };
