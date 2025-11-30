const Post = ({ Content, Image , user }) => {
  return (
    <div>
      <p>{Content}</p>

      {Image && (
        <img
          src={URL.createObjectURL(Image)}
          alt=""
          style={{ width: 100 }}
        />
      )}
      <span>{user}</span>
    </div>
  );
};

export default Post;
