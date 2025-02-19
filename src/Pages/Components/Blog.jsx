import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/blogs"
        );
        console.log("Fetched blogs:", response.data);

        // Sort blogs by date (newest first) or by ID as fallback
        const sortedBlogs = response.data.sort((a, b) => {
          if (a.created_at && b.created_at) {
            return new Date(b.created_at) - new Date(a.created_at);
          } else {
            return b.blog_id - a.blog_id; // Fallback to sorting by ID
          }
        });

        setBlogs(sortedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="text-white text-center mt-10">Loading blogs...</div>;
  }

  return (
    <div className="">
      <div className="bg-[#212121] flex text-white flex-col h-full">
        <div className="flex-grow p-4">
          <div className="flex flex-col w-96 gap-4 mx-auto">
            {blogs.length === 0 ? (
              <p className="text-gray-500 text-center">No blogs available.</p>
            ) : (
              blogs.map((blog) => (
                <Link
                  to={`/blogdetails/${blog.blog_id}`}
                  key={blog.blog_id}
                  className="border p-4 rounded-lg cursor-pointer"
                >
                  <img
                    src={blog.blog_image}
                    alt={blog.blog_title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <h3
                    className="text-lg font-semibold mt-2"
                    title={blog.blog_title}
                  >
                    {blog.blog_title.length > 50
                      ? `${blog.blog_title.substring(0, 50)}...`
                      : blog.blog_title}
                  </h3>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;