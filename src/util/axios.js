import axios from "axios";

export const getPost = async (slug) => {
  const { data } = await axios.get(`http://localhost:1337/posts?slug=${slug}`);
  return data[0];
};

export const getPosts = async () => {
  const { data } = await axios.get(
    "http://localhost:1337/posts?_sort=created_at:desc"
  );
  return data;
};
