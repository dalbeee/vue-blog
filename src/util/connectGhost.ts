import GhostContentAPI from "@tryghost/content-api";
import axios from "axios";

const uri = "http://localhost:2368/ghost/api/v3/content";
const key = "?key=d4ac143e94595b33d0f0f3b412";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: "http://localhost:2368",
  key: "d4ac143e94595b33d0f0f3b412",
  version: "v3",
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getPost(slug: string) {
  try {
    const {
      data: { posts },
    } = await axios.get(`${uri}/posts/slug/${slug}${key}`);
    return posts[0];
  } catch (error) {
    throw Error("page not found");
  }
}
