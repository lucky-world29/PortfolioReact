import React from "react";
import { useLocation } from "react-router-dom";
import "./Blog.css";

const blogPosts = [
  {
    id: 1,
    title: "5 Tips for Better Web Design",
    description: "Learn how to create user-friendly and visually appealing web designs with these essential tips.",
    date: "December 20, 2024",
    link: "/blog/5-tips-for-better-web-design",
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    description: "A beginner's guide to understanding and using React hooks effectively in your projects.",
    date: "November 15, 2024",
    link: "/blog/understanding-react-hooks",
  },
  {
    id: 3,
    title: "The Future of Mobile Development",
    description: "Explore the latest trends and technologies shaping the future of mobile app development.",
    date: "October 5, 2024",
    link: "/blog/future-of-mobile-development",
  },
  {
    id: 4,
    title: "Mastering JavaScript ES6 Features",
    description: "Understand and master modern JavaScript features like arrow functions, destructuring, and modules.",
    date: "September 10, 2024",
    link: "/blog/mastering-es6",
  },
  {
    id: 5,
    title: "Building a Portfolio with React",
    description: "Step-by-step guide to create an impressive portfolio website using React and Tailwind CSS.",
    date: "August 18, 2024",
    link: "/blog/portfolio-with-react",
  },
  {
    id: 6,
    title: "Introduction to TypeScript",
    description: "Discover why TypeScript is gaining popularity and how it can improve your JavaScript projects.",
    date: "July 25, 2024",
    link: "/blog/introduction-to-typescript",
  },
  {
    id: 7,
    title: "Optimizing Website Performance",
    description: "Learn strategies to make your website load faster and provide a better user experience.",
    date: "June 12, 2024",
    link: "/blog/optimizing-website-performance",
  },
];


const Blog = () => {
  const location = useLocation();

  return (
    <section className="blog py-5" id="blog">
      <div className="container">
        <h2 className="text-center mb-5">Blog</h2>
        <div className="row">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-md-4 mb-4">
              <div className="card blog-card h-100">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.description}</p>
                  <p className="text-muted small">{post.date}</p>
                  {location.pathname !== post.link && ( // Hide the link if on the blog page
                    <a
                      href={post.link}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
