import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetail = () => {
  const { id } = useParams(); // Get blog id from URL parameter
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/blogs/${id}`
        );
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [id]);

  if (loading) {
    return <div className="text-white text-center mt-10">Loading blog...</div>;
  }

  if (!blog) {
    return <div className="p-4 text-white">Blog not found</div>;
  }

  const paragraphs = blog.blog_description.split("###");

  return (
    <div className="">
      <div className="p-4 max-w-2xl mx-auto">
        <img
          src={blog.blog_image}
          alt={blog.blog_title}
          className="w-full rounded-lg"
        />
        <h2
          className="text-3xl text-center font-bold m-4"
          style={{ fontFamily: "Abril Fatface, serif" }}
        >
          {blog.blog_title}
        </h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mt-2 text-justify">
            {paragraph.trim()}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BlogDetail;