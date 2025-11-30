import Post from "./Posts";

const PostList = ({ posts }) => {
  return (
    <>
      {posts.map((post, index) => (
        <Post
          key={index}
          Content={post.Content}
          Image={post.Image}
        />
      ))}
    </>
  );
};

export default PostList;
 