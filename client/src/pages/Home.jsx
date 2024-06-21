import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/blogs")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = async (id) => {
    const res = await axios.delete(`http://localhost:4000/api/blogs/${id}`);
    setBlogs(
      blogs.filter((blog) => {
        return blog._id !== id;
      })
    );
    if (res) {
      toast.success("Blog deleted successfully!");
    }
  };

  return (
    <div className="bg-white py-2 sm:py-3">
      <div className="mx-auto max-w-7xl px-2 lg:px-2">
        <Link to="/create-blog">
          <button
            type="button"
            className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          >
            Create blog
            <svg
              className="w-6 h-6 ml-2 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </Link>

        {blogs.length >= 1 ? (
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl my-3">
            From the blog
          </h2>
        ) : (
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl my-3">
            Create your first blog
          </h2>
        )}

        <div>
          {blogs.map((blog) => (
            <article key={blog._id} className="border-t border-gray-200 my-10">
              <div>
                <h3 className="mt-3 text-lg font-semibold text-gray-900 ">
                  {blog.title}
                </h3>
                <p className="mt-4 text-sm text-gray-600">{blog.description}</p>
                <p className=" mt-5 font-semibold text-gray-900">{blog.name}</p>
              </div>
              <div className="flex items-center space-x-4 mt-3">
                <Link to={`/update-blog/${blog._id}`}>
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Update blog
                  </button>
                </Link>

                <button
                  type="button"
                  onClick={() => handleClick(blog._id)}
                  className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  <svg
                    className="w-5 h-5 mr-1 -ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Home;
