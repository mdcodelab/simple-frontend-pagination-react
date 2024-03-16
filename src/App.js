import React from "react";
import axios from "axios";
import Posts from "./components/Posts";

function App() {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage, setPostsPerPage] = React.useState(10);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumber.push(i);
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="app">
      <h1>My blog items</h1>
      <Posts posts={currentPosts} loading={loading}></Posts>
      <div className="pagination">
        {pageNumber.map((number) => (
          <a href="#" key={number} onClick={() => paginate(number)}>
            {number}
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
