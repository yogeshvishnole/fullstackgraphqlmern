import { useQuery, gql } from "@apollo/client";

const GET_ALL_POSTS = gql`
  {
    posts {
      id
      title
      description
    }
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(GET_ALL_POSTS);

  console.log(data);

  return <div>Hello</div>;
};

export default Home;
