import { useState } from "react";
import blogsData from "../data/blogs.json";
import { Link } from "react-router-dom";

export function Blogs() {
  const [expandedBlogs, setExpandedBlogs] = useState({});

  const toggleBlog = (index) => {
    setExpandedBlogs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="blogs-section">
      <div className="section-inner" style={{ paddingTop: "48px" }}>
        <span className="section-tag">{blogsData.meta.tag}</span>

        <h1 className="section-title">
          {blogsData.meta.title}
        </h1>

        <p className="section-desc">
          {blogsData.meta.description}
        </p>

        <div className="blogs-grid">
          {blogsData.items.map((blog, index) => {
            const content =
              blog.content ||
              blog.article ||
              blog.body ||
              blog.description ||
              blog.excerpt;

            const expanded = expandedBlogs[index];

            return (
              <div className="blog-card" key={blog.title}>
                <div className="blog-category">
                  {blog.category}
                </div>

                <div className="blog-title">
                  {blog.title}
                </div>

                {blog.date && (
                  <div className="blog-date">
                    {blog.date}
                  </div>
                )}

                <div className="blog-content">
                  {expanded
                    ? content
                    : content.length > 350
                    ? content.substring(0, 350) + "..."
                    : content}
                </div>

                <button
                  className="btn-primary blog-btn"
                  onClick={() => toggleBlog(index)}
                >
                  {expanded ? "Show Less ↑" : "Read More →"}
                </button>
              </div>
            );
          })}
        </div>

        <div className="section-explore-wrap">
          <Link to="/" className="btn-outline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}