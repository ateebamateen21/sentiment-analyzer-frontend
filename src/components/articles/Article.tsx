// src/components/Article.tsx
import Link from "next/link";
import React from "react";

interface ArticleProps {
  title: string;
  content: string;
  link: string;
  className?: string;
}

const Article: React.FC<ArticleProps> = ({
  title,
  content,
  className,
  link,
}) => {
  return (
    <article
      className={`grid-item bg-white bg-opacity-20 backdrop-filter backdrop-blur-md rounded-md px-4 md:px-6 py-8 ${className}`}
    >
      <h3 className="text-xl font-bold mb-2 hover:underline-offset-1">
        <Link href={link} className="hover:underline" target="_blank" passHref>
          {title}
        </Link>
      </h3>
      <p className="text-gray-700">{content}</p>
    </article>
  );
};

export default Article;
