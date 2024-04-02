import axiosInstanceClient from "./axiosInstance";

// export const getAllPostByPage = async (page = 1, limit=2) => {
//   return await axiosInstance.get(`/posts?_page=${page}&_limit=${limit}`);
// };
export const getAllPostByPage = async ({ page, limit = 5 }) => {
  return await axiosInstanceClient().get(
    `post/getAllPosts?page=${page}&limit=${limit}`
  );
};

export const getAllPostByTitle = async ({ title, page, limit = 5 }) => {
  return await axiosInstanceClient().get(
    `post/getAllPosts?title=${title}&page=${page}&limit=${limit}`
  );
};

export const getAllPosts = async () => {
  return await axiosInstanceClient().get("post");
};

export const getCommentByPostId = async (postId) => {
  return await axiosInstanceClient().get(`post/getCommentByPostId/${postId}`);
};

export const getPostById = async (postId) => {
  // console.log(postId);
  return await axiosInstanceClient().get(`post/getPostById/${postId}`);
};
