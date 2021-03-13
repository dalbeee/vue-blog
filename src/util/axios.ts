import axios from "axios";
import { ICategory } from "..";

export const getPost = async (slug: string) => {
  const { data } = await axios.get(`http://localhost:1337/posts?slug=${slug}`);
  return data[0];
};

export const getPosts = async () => {
  const { data } = await axios.get(
    "http://localhost:1337/posts?_sort=created_at:desc"
  );
  return data;
};

export const getCategories = async () => {
  let error = false;
  let isLoading = false;
  const categories: ICategory[] = [];

  try {
    isLoading = true;

    const { data: categoryNonePosts } = await axios.get(
      "http://localhost:1337/posts"
    );
    categories.push({
      type: "",
      posts: categoryNonePosts.length,
      name: "all",
    });

    const { data } = await axios.get("http://localhost:1337/categories");
    data.map((category: any) =>
      categories.push({
        type: category.type,
        posts: category.posts.length,
        name: category.type,
      })
    );

    isLoading = false;
    return { categories, error, isLoading };
  } catch (error) {
    return { error, isLoading };
  }
};

export const getCategoryPosts = async (categoryName: string) => {
  let error = false;
  let isLoading = false;

  const categoryString = categoryName && `category.type=${categoryName}`;

  try {
    isLoading = true;
    const { data: posts } = await axios.get(
      `http://localhost:1337/posts?_sort=created_at:desc&${categoryString}`
    );

    return { posts, isLoading, error };
  } catch (error) {
    return { error, isLoading };
  }
};
