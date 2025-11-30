import { useEffect, useState } from "react";
import Login from "./component/Login";
import Header from "./component/Header";
import CreatePost from "./component/CreatePost";
import PostList from "./component/PostList";

const App = () => {
  const [user, setUser] = useState("mcdev");
  const [posts, setposts] = useState([]);

  useEffect(() => {
    document.title = user ? `${user}'s feed` : "Please Login";
  }, [user]);

  if (!user) return <Login setUser={setUser} />;

  return (
    <div>
      <Header user={user} setUser={setUser} />
      <CreatePost user={user} posts={posts} setposts={setposts} />

      
      <PostList posts = {posts}/>
    </div>
  );
};

export default App;
