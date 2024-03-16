import React from 'react';
import axios from "axios";
import Posts from "./components/Posts";
//from JSON placeholder

function App() {
  const [posts, setPosts]=React.useState([]);
  const [loading, setLoading]=React.useState(false);
  const [currentPage, setCurrentPage]=React.useState(1);
  const [postsPerPage, setPostsPerPage]=React.useState(10);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts");
      setPosts(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);


  console.log(posts);
  return (
    <div className="app">
    <h1>My blog items</h1>
      <Posts posts={posts} loading={loading}></Posts>
    </div>
  );
}

export default App;

