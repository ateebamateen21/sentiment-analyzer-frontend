// src/components/Article.tsx
import React from "react";

interface ArticleProps {
  title: string;
  content: string;
  className?: string;
}

const Article: React.FC<ArticleProps> = ({ title, content, className }) => {
  return (
    <article
      className={`grid-item bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-md px-4 md:px-6 py-8 ${className}`}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </article>
  );
};

export default Article;
